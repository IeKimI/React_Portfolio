import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "clicked")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Eri Kim</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 202 770 6710</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>erikim0413@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div> 
        </div>
    );
}
