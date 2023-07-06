import { useState } from "react"

const ImageInput = () => {
  const [inputVal, setInputVal] = useState('')

  return (
    <form>
      <input value={inputVal} onChange={e => setInputVal(e.target.value)}/>
    </form>
  )
}

export default ImageInput