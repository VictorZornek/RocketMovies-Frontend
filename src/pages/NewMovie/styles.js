import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";
`

export const Content = styled.div`
    grid-area: content;

    margin: 4rem 12.3rem 0 13rem;
    max-height: 65vh;

    > a {
        display: flex;
        align-items: center;
        gap: .8rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > Form{
        overflow-y: auto;

    }

    Form::-webkit-scrollbar {
        width: .6rem;
        height: 1rem;

        margin-left: 10px;
    }

    Form::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 5px;
    }

    Form::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`

export const Form = styled.form`
    max-height: 80vh;

    margin-top: 2.4rem;

    > h1 {
        font-size: 3.6rem;

        color: ${({ theme }) => theme.COLORS.WHITE_500};
    }

    > div {
        display: flex;
        gap: 4rem;

        margin: 4rem 0;
    }

`

export const Section = styled.section`
    width: 100%;

    > span {
        font-size: 2rem;

        color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
`

export const Button = styled.button`
    width: 100%;
    height: 5.6rem;

    padding: 1.75rem 0;

    font-weight: 550;

    border: none;
    border-radius: 1rem;

    background-color: ${({ theme, $isSave }) => 
        $isSave ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_BLACK_700};

    color: ${({ theme, $isSave }) => 
        $isSave ? theme.COLORS.BACKGROUND_400 : theme.COLORS.PINK};
`