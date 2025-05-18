import "./NavIconButton.css";

interface Props {
    text: string;
    iconUrl: string;
    link: string;
    alt?: string;
}

const NavIconButton = ({ text, iconUrl, link, alt }: Props) => {
    return (
        <a href={link} className="icons-icons">
            <img src={iconUrl} alt={alt} />
            <div>{text}</div>
        </a>
    )
}
export default NavIconButton;