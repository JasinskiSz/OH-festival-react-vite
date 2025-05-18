import dropdownIcon from "../../assets/Page/Elements/Arrow.svg";
import "./NavButton.css";

interface Props {
    type: "dropdown" | "link";
    text: string;
    link: string;
}

const NavButton = ({ type, text, link }: Props) => {

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