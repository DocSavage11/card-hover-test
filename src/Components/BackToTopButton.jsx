import React, {useState, useEffect} from 'react'
import '../App.css'


function BackToTopButton() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className={backToTop ? 'Button-Container Show-Button' : "Button-Container"} onClick={scrollUp}>
        <img id='BTTBI' src={require('../Assest/Icons/Back-To-Top-Button.png')} alt="" />
    </div>
  )
}

export default BackToTopButton