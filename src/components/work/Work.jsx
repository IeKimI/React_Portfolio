import { useState } from "react"
import "./work.scss"

export default function Work() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data=[
        {
            id: "1",
            icon: "./assets/linkedin.png",
            title: "example1",
            desc: "description",
            img: "./assets/linkedin.png"
        },
        {
            id: "2",
            icon: "./assets/linkedin.png",
            title: "example2",
            desc: "description",
            img: "./assets/linkedin.png"
        },
        {
            id: "3",
            icon: "./assets/linkedin.png",
            title: "example3",
            desc: "description",
            img: "./assets/linkedin.png"
        },
    ]

    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
    }
    return (
        <div className="work" id="work">

            <div className="slider" style={{ transform:`translateX(-${currentSlide * 100}vw`}}>
                {data.map((d)=>(
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="assets/linkedin.png" alt="" />

                            </div>
                        </div>
                    
                </div>))}
                
            </div>
            <img src="assets/left-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/left-arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>

        </div>
    )
}
