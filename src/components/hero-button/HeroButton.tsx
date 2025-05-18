import "./HeroButton.css";
import "../../FlexClasses.css";

interface Props {
    text: string;
    direction: "left" | "right";
    colorHash: string;
}

const handleDirection = (direction: string, text: string) => {
    switch (direction) {
        case "right":
            return (
                <>
                    {text}
                    <img src="../../../public/Icons/Arrow-right.svg" alt="arrow-right" />
                </>
            );
        case "left":
            return (
                <>
                    <img src="../../../public/Icons/Arrow-left.svg" alt="arrow-left" id="right-circle-text" />
                    {text}
                </>
            );
        default:
            return "";
    }
}

const HeroButton = ({ text, direction, colorHash }: Props) => {
    return (
        <a href="#" id="hero-button" className="flex-center-cross" style={{ color: colorHash }}>
            {handleDirection(direction, text)}
        </a>
    );
}

export default HeroButton;