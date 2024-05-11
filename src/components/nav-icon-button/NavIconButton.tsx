import "./NavIconButton.css";

interface NavIconButtonProps {
    text: string;
    iconUrl: string;
    link: string;
    alt?: string;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ text, iconUrl, link, alt }) => {
    return (
        <a href={link} className="icons-icons">
            <img src={iconUrl} alt={alt} />
            <div>{text}</div>
        </a>
    )
}
export default NavIconButton;