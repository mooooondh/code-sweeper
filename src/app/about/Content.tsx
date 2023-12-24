"use client"

// hooks
import { useAbout } from "@/hooks/useAbout"

// contents
import { About } from "@/utils/datas/aboutData/About"
// import { About } from "./about/About"
import { Contribute } from "@/utils/datas/aboutData/Contribute"

const Content = () => {
  const { selectedAboutMenu } = useAbout()

  switch (selectedAboutMenu) {
    case "about": return About()
    case "contribute": return Contribute()
  }
}

export default Content