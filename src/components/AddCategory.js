import React, { useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories }  ) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit= (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 0 ) {
            //setCategories( cats => [ inputValue,...cats] ); // order invertido, recibe un callback,™¡
            setCategories( categories => [ inputValue, ...categories  ] ); // order correcto
            setInputValue('');
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <input
                    // defaultValue="White here"
                    type={'text'}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    );
}

export default AddCategory;

// check the parameters of the component
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
};