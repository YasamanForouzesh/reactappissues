import { Link } from 'react-router-dom'
import {   useState} from "react";
export default function Header() {
    const [filter,setFilter]=useState("")
    const handlerFilter=(status)=>{
        setFilter(status)
        console.log(status)
    }
    return(
        <header className="header">
                <img className="gitImag"  src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5347_-_Github-512.png" />
            <nav className="navBar">
                <button className="bar">Pull Requests</button> 
                <button className="bar">Pull Requests</button> 
                <button className={`bar ${filter==="issues" ? "isActive" : ""}`} onClick={()=>handlerFilter("issues")}><Link className="link" to='/issues'>Issues</Link></button> 
                <button className={`bar ${filter==="Marketplace" ? "isActive" : ""}`} onClick={()=>handlerFilter("Marketplace")}>Marketplace</button>
                <button className="bar">Explore</button>
                
            </nav>
        </header>
    )

