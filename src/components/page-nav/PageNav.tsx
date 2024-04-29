import logo from "../../assets/Page/OH-festival-navbar-logo.svg";
import NavButton from "../nav-button/NavButton";
import NavIconButton from "../nav-icon-button/NavIconButton";
import searchIcon from "../../assets/Page/Icons/Search.svg";
import userIcon from "../../assets/Page/Icons/User.svg";
import "./PageNav.css";

const PageNav: React.FC = () => {
    return (
        <div className="nav-div">
            <nav className="navbar-top">
                <img src={logo} alt="Logo" />
                <div className="navbar-center-items">
                    <NavButton link='#' text='Blog' type='link'></NavButton>
                    <NavButton link='#' text='Gdynia' type='dropdown'></NavButton>
                    <NavButton link='#' text='Gdańsk' type='dropdown'></NavButton>
                    <NavButton link='#' text='Archiwum' type='link'></NavButton>
                    <NavButton link='#' text='FAQ' type='link'></NavButton>
                </div>
                <div className="icons-container">
                    <NavIconButton iconUrl={searchIcon} text="Szukaj" link="#" alt="search-icon"></NavIconButton>
                    <NavIconButton iconUrl={userIcon} text="Zaloguj się" link="#" alt="user-icon"></NavIconButton>
                </div>
            </nav>
        </div>
    )
}
export default PageNav;