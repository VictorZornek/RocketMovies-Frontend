import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 26rem;

    margin-bottom: 2.9rem;
    padding: 2rem 1.6rem;

    border: none;
    border-radius: 10px;

    resize: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_900};;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`