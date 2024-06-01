import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState("");
    const onInputChange = (event) => {
        // console.log(event.target.value);
        setinputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue("");
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired,
};
