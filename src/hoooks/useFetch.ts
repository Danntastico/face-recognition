import { useEffect, useReducer, useRef } from "react"

interface State<T> {
  data?: T,
  error?: Error
  loading: boolean
}

type Action<T> = { type: 'loading' } | { type: 'error', payload: Error } | { type: 'success', payload: T }

const useFetch = <T = unknown>(url?: string, requestOptions?: RequestInit): State<T> => {
  const cancelRequest = useRef(false)

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
    const fetchData = async () => {
      try {
        const response = await fetch(url, requestOptions)
        console.log(response)
      } catch (error) {
        dispatch({ type: 'error', payload: error as Error })
      }
    }

    void fetchData()
  }, [url, requestOptions])

  return state
}

export default useFetch