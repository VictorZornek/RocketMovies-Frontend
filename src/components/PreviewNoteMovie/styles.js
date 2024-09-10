import styled from "styled-components";

export const Container = styled.div`
    .description {
        white-space: pre-wrap; /* Preserva quebras de linha e espaços */
    }

    > .wrap-title-rating {
        display: flex;
        align-items: center;
        gap: 1.9rem;

        margin: 2.4rem 0;

        h1 {
            font-size: 3.6rem;
        }
    }

    > .wrap-avatar-author {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        img {
            height: 1.6rem;
            width: 1.6rem;

            border-radius: 50%;
        }

        span {
            display: flex;
            align-items: center;
            gap: .6rem;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }

    > footer {
        display: flex;
        gap: .8rem;

        margin: 4rem 0;
    }

    > .description {
        max-width: 111rem;

        text-align: justify;

    }
`