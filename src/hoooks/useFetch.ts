import { useEffect, useReducer, useRef } from "react"

interface State<T> {
  data?: T,
  error?: Error
  loading: boolean
}

type Action<T> = { type: 'loading' } | { type: 'error', payload: Error } | { type: 'success', payload: T }
type Cache<T> = { [url: string]: T }

const useFetch = <T = unknown>(url?: string, requestOptions?: RequestInit): State<T> => {
  const cancelRequest = useRef(false)
  const cache = useRef<Cache<T>>({})

  const initialState: State<T> = {
    data: undefined,
    error: undefined,
    loading: false,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, loading: true }
      case 'success':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })
      if (cache.current[url]) {
        console.log('taken from cache')
        dispatch({ type: 'success', payload: cache.current[url] })
        return
      }

      try {
        const response = await fetch(url, requestOptions)
        const data = (await response.json()) as T

        if (cancelRequest.current) return

        dispatch({ type: 'success', payload: data })
      } catch (error) {
        if (cancelRequest.current) return
        dispatch({ type: 'error', payload: error as Error })
      }
    }

    void fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}

export default useFetch