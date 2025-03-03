import {useState} from "react";

export default function UserInput({title, initialValue, onChangeValue}) {
    const [input, setInput] = useState(initialValue);

    function handleChange(event) {
        const value = Number(event.target.value);
        setInput(value);
        onChangeValue(value);
    }

    return (
        <div>
            <label>{title}</label>
            <input type="number" value={input} onChange={handleChange}/>
        </div>
    );
}