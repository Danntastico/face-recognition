import ImageInput from "../containers/ImageInput"
import Navigation from "../containers/Navigation"
import ResultsContainer from "../containers/ResultsContainer"

const Home = () => {
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