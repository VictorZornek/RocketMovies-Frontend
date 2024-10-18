import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles.js";

export function Markers({ placeholder, value, isNew, onClick, ...rest}) {

    return(
        <Container isNew={isNew} >

            <input 
                type="text" 
                value={value}
                placeholder={placeholder}
                readOnly={!isNew}
                {...rest}
            />


            <button onClick={onClick} type="button" className={isNew ? 'button-add' : 'button-delete'}>
                { isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    )
}