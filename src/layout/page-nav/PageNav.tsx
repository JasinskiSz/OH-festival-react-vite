import logo from "../../assets/Page/OH-festival-navbar-logo.svg";
import NavButton from "../../components/nav-button/NavButton";
import NavIconButton from "../../components/nav-icon-button/NavIconButton";
import searchIcon from "../../assets/Page/Icons/Search.svg";
import userIcon from "../../assets/Page/Icons/User.svg";
import "./PageNav.css";

const PageNav = () => {
    return (
        <div className="page-nav">
            <nav className="nav-elements">
                <img src={logo} alt="Logo" id="logo"/>
                <div id="buttons">
                    <NavButton link='#' text='Blog' type='link'></NavButton>
                    <NavButton link='#' text='Gdynia' type='dropdown'></NavButton>
                    <NavButton link='#' text='Gdańsk' type='dropdown'></NavButton>
                    <NavButton link='#' text='Archiwum' type='link'></NavButton>
                    <NavButton link='#' text='FAQ' type='link'></NavButton>
                </div>
                <div id="icons">
                    <NavIconButton iconUrl={searchIcon} text="Szukaj" link="#" alt="search-icon"></NavIconButton>
                    <NavIconButton iconUrl={userIcon} text="Zaloguj się" link="#" alt="user-icon"></NavIconButton>
                </div>
            </nav>
        </div>
    )
}
export default PageNav;