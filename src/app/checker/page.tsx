"use client"

// components
import Header from "./Header"
import Footer from "./Footer"
import EnterCodeArea from "./EnterCodeArea"

const Checker = () => {
  return (
    <div className="flex flex-1 flex-col h-screen bg-gray-800">
      <Header />
      <EnterCodeArea />
      <Footer />
    </div>
  )
}

export default Checker