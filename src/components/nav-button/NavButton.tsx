import dropdownIcon from "../../assets/Page/Elements/Arrow.svg";
import "./NavButton.css";

interface NavButtonProps {
    type: "dropdown" | "link";
    text: string;
    link: string;
}

const NavButton: React.FC<NavButtonProps> = ({ type, text, link }) => {

    return (
        <a className="nav-link-btn" href={link}>
            <div>
                <span>{text}</span>
                {type === "dropdown" ? <img src={dropdownIcon} alt="arrow" /> : null}
            </div>
        </a>
    )
}
export default NavButton;