// components
import Header from "./Header"
import Footer from "./Footer"
import ResultArea from "./ResultArea"
import AiResultArea from "./AiResultArea"

const Result = () => {
  return (
    <div className="flex flex-1 flex-col h-screen bg-gray-800">
      <Header />
      <div className="flex flex-1 overflow-y-scroll">
        <ResultArea />
        <AiResultArea />
      </div>
      <Footer />
    </div>
  )
}

export default Result