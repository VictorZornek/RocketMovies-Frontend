import { Container } from './styles.js';
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

export function RatingStars({ rating, ...rest }) {
    const maxRating = 5;
    const stars = [];

    for(let i = 1; i <= maxRating; i++) {
        rating >= i ? stars.push(<IoStarSharp key={i} />) : stars.push(<IoStarOutline key={i} />)
    }
    
    return(
        <Container {...rest} >
            {stars}
        </Container>
    )
}