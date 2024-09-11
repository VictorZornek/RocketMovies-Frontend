import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    gap: 2.4rem;
    
    margin-top: 2.4rem;
    padding: 1.6rem;

    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_700};

    > span {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        padding: 1.6rem;

        border-radius: 1rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    > div {
        display: flex;
        align-items: center;

        max-width: 20rem;

        border: dashed ${({ theme }) => theme.COLORS.GRAY_400} 2px;
        border-radius: 1rem;

        
        input {
            width: 78%;

            padding: 1.6rem;
            
            border: none;

            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.WHITE_500};
        }
    }
`