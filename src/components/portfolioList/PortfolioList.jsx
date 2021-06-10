import "./portfolioList.scss"

export default function PortfolioList({id, title, clicked, notSelected}) {
    return (
        <li className={clicked ? "portfolioList clicked": "portfolioList"} onClick={() => notSelected(id)}>
            {title}
            
        </li>
    )
}
