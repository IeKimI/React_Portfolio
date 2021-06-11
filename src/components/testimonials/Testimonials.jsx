import "./testimonials.scss"

export default function Testimonials() {

    const data =[
        {
            id: 1,
            name: "Athina Theofilou",
            title: "Future Architect",
            img: "assets/portrait_small.png",
            icon: "assets/linkedin.png",
            desc: "eri is good",
            featured: true
        },
        {
            id: 2,
            name: "adfa Theofilou",
            title: "Future Architect",
            img: "assets/portrait_small.png",
            icon: "assets/linkedin.png",
            desc: "eri is good",
            featured: false
        },
        {
            id: 3,
            name: "Athidafdafdna Theofilou",
            title: "Future Architect",
            img: "assets/portrait_small.png",
            icon: "assets/linkedin.png",
            desc: "eri is good",
            featured: false
        },
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/left-arrow.png" className="left" alt="" />
                        <img src={d.img} className="pic" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
