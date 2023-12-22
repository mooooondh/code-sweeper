"use client"

// components
import Header from "./Header"
import Footer from "./Footer"
import EnterCodeArea from "./EnterCodeArea"

const Checker = () => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <Header />
      <EnterCodeArea />
      <Footer />
    </div>
  )
}

export default Checker