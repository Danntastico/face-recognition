import ImageInput from "../containers/ImageInput"
import Navigation from "../containers/Navigation"
import ResultsContainer from "../containers/ResultsContainer"
import useFetch from "../hoooks/useFetch"
import { getRequestOptions, URL as clarifaiURL  } from "../utils/clarifai"

const Home = () => {
  const requestOptions = getRequestOptions()
  const state = useFetch(clarifaiURL, requestOptions)
  console.log(state)
  return (
    <div className="w-full">
      <Navigation/>
      <div className="w-full flex flex-col items-center content-center m-5">
        <ImageInput/>
        <ResultsContainer/>
      </div>
    </div>
  )
}

export default Home