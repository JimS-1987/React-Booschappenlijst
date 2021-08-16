
import React, { useState } from "react";

function InputField(props) {
    const [inputValue, setInputValue] = useState("");
    const onInput = (event) => {
        setInputValue(event.target.value);
    };
    const doSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(inputValue);
        setInputValue("");
    };
    return (
        <form onSubmit={doSubmit}>
            <label>
                <input
                    value={inputValue}
                    type="text"
                    placeholder="Enter grocery"
                    onChange={onInput}
                />
                <button>submit</button>
            </label>
        </form>
    );
}

export default InputField;