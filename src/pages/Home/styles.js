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

export const Content = styled.main`
    grid-area: content;
    
    padding: 0 10.6rem;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: 4.7rem 0 3.7rem 0;

        h1 {
            font-size: 3.2rem;
            font-weight: normal;
            color: ${({ theme }) => theme.COLORS.WHITE_900};
        }

        span {
            display: flex;
            align-items: center;
            gap: 2.5px;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }

    .notesMovies {
        display: flex;
        flex-direction: column;
        max-height: 65vh;
        overflow-y: auto;


    }

    .notesMovies::-webkit-scrollbar {
        width: .6rem;
        height: 1rem;

        margin-left: 10px;
    }

    .notesMovies::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 5px;
    }

    .notesMovies::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

`

export const ButtonAddMovie = styled.button `
    height: 4.8rem;

    display: flex;
    align-items: center;
    gap: .8rem;

    padding: 1.2rem 3.2rem;

    color: ${({ theme }) => theme.COLORS.BLACK_500};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    border-radius: .8rem;
    

    > svg {
        color: ${({ theme }) => theme.COLORS.BLACK_900};
    }
`