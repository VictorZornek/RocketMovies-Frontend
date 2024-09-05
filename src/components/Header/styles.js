import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: 11.6rem;

    padding: 2.4rem 12.3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};


    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 2.4rem;

        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Input = styled.input`
    height: 5.6rem;
    width: 65%;

    font-size: 1.4rem;

    border-radius: 1rem;
    border: none;

    padding: 1.9rem 2.4rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE_500};
`


export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > div {
        display: flex;
        flex-direction: column;

        font-size: 1.4rem;


        strong {
            color: ${({ theme }) => theme.COLORS.WHITE_500};
        }

        a {
            margin-left: auto;

            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
    }

    > img {
        height: 6.4rem;
        width: 6.4rem;

        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
`