import "./Button.css";
const Button = ({ onbutton }) => {
    const btn = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "+", "-", "/", "*", "c","="];

    return (<>

        {

            btn && btn.map((item) => (
                <button className=".calculator button" onClick={() => onbutton(item)}> {item} </button>
            ))

        }
    </>)
}

export default Button;