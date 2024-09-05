import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    height: 5.6rem;

    padding: 1.8rem 1.6rem;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_400};;
    
    > input {
        width: 100%;
        height: 5rem;
        
        border: none;
        
        background-color: transparent;
        
        color: ${({ theme }) => theme.COLORS.WHITE_900};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_400};;
        }
    }


`