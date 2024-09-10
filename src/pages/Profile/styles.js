import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`
export const Header = styled.div`
    height: 14.4rem;

    padding: 6.4rem 0 5.9rem 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
`

export const Avatar = styled.div`
    position: relative;
    margin: -15rem auto 5rem;

    > img {
        height: 18.6rem;
        width: 18.6rem;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        bottom: 0;
        right: 0;

        width: 4.8rem;
        height: 4.8rem;

        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

        background-color: ${({ theme }) => theme.COLORS.PINK};

        > svg {
            height: 2rem;
            width: 2rem;
        }

        > input {
            display: none;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2.4rem;

    margin: 6.4rem auto;
    
    max-width: 34rem;

    > .wrap-user-email, .wrap-password {
        display: flex;
        flex-direction: column;

        gap: .8rem;
    }

`