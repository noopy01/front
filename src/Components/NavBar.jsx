import { Link } from "react-router-dom";
import Logo from "../Img/Logo.png";

function Navbar() {
    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                padding: "10px",
                alignItems: "center",
            }}
        >
            <Link to="/"
                style={{
                    color: "#000000",
                    marginRight: "70vw",
                    textDecoration : "none",
                    display : "flex",
                }}
                className="header-link"
            >
                <img className="Logo" src={Logo} alt="Logo" style={{ marginLeft : "10px", width : "40px", height : "40px" }}/>
                <div style={{marginLeft : "10px", color : "#700E9F"}}>Perfume<br/>Collector </div>
            </Link>
            <Link to="/signup"
                style={{
                    color: "#000000",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                질문지
            </Link>
            <Link to="/popular"
                style={{
                    color: "#000000",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                MBTI
            </Link>
            <Link to="/nowplay"
                style={{
                    color: "#000000",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                미정
            </Link>
            <Link to="/toprated"
                style={{
                    color: "#000000",
                    marginRight: "2vw",
                    textDecoration : "none"
                }}
                className="header-link"
            >
                Log in
            </Link>
            <style>
                {`
                    .header-link:hover {
                        font-size: 1.1em;
                    }
                `}
            </style>
        </div>
    );
}


export default Navbar;