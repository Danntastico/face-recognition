import ImageInput from "../containers/ImageInput"
import Navigation from "../containers/Navigation"
import ResultsContainer from "../containers/ResultsContainer"

const Home = () => {
  return (
    <div>
      <Navigation/>
      <ImageInput/>
      <ResultsContainer/>
    </div>
  )
}

export default Home