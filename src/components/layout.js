import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./layout.css"
const layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default layout
