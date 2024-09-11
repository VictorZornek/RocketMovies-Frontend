import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles.js";

import { ButtonText } from '../ButtonText';

export function Markers({ ...rest}) {

    return(
        <Container>
            <span>
                React
                <ButtonText icon={FiX} />    
            </span>

            <div>
                <input type="text" placeholder='Novo marcador' {...rest} />
                <ButtonText icon={FiPlus} />
            </div>
        </Container>
    )
}