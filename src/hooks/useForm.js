  
import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = (name) => (text) => {

        setValues({
            ...values,
            [name]: text
        });
    }

    return [ values, handleInputChange, reset ];
}