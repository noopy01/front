import { Link } from "react-router-dom";
import Logo from "../Img/Logo.png";
import * as B from "./NavBar.style";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const onhandleClick = () => {
        navigate(`/login`)
    }
    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                padding: "10px",
                alignItems: "center",
                position : "fixed",
                top: 0,
                left: 0,
                backgroundColor: "#fff",
                zIndex: 1000,
            }}
        >
            <Link to="/"
                style={{
                    color: "#000000",
                    marginRight: "35vw",
                    textDecoration : "none",
                    display : "flex",
                }}
                className="header-link"
            >
                <img className="Logo" src={Logo} alt="Logo" style={{ marginLeft : "10vw", width : "48px", height : "42.64px" }}/>
                <div style={{fontWeight : "bold", marginLeft : "10px", color : "#700E9F"}}>Perfume<br/>Collector </div>
            </Link>
            <B.Container>
                <B.Component>
                <Link to="/"
                    style={{
                        color: "#000000",
                        marginRight: "2vw",
                        textDecoration : "none"
                    }}
                    className="header-link"
                >
                    Main
                </Link>
                <Link to="/survey"
                    style={{
                        color: "#000000",
                        marginRight: "2vw",
                        textDecoration : "none"
                    }}
                    className="header-link"
                >
                    질문지
                </Link>
                <Link to="/mbti"
                    style={{
                        color: "#000000",
                        marginRight: "2vw",
                        textDecoration : "none"
                    }}
                    className="header-link"
                >
                    MBTI
                </Link>
                <Link to="/mypage"
                    style={{
                        color: "#000000",
                        marginRight: "2vw",
                        textDecoration : "none"
                    }}
                    className="header-link"
                >
                    My Page
                </Link>
                </B.Component>
            </B.Container>
            <B.Button onClick={onhandleClick}>Login</B.Button>
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