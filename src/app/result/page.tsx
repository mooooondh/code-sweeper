// components
import Header from "./Header"
import Footer from "./Footer"
import ResultArea from "./ResultArea"

const Checker = () => {
  return (
    <div className="flex flex-1 flex-col h-screen bg-gray-800">
      <Header />
      <ResultArea />
      <Footer />
    </div>
  )
}

export default Checker