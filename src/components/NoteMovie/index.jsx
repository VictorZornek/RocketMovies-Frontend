import { Container } from './styles.js';
import { IoStarSharp } from "react-icons/io5";

import { Tag } from '../Tag';
import { RatingStars } from '../RatingStars/index.jsx';

export function NoteMovie({ data, ...rest }) {
    const descriptionLimit = 415

    const changedDescription = data.description.length > descriptionLimit ? data.description.substring(0, descriptionLimit) + '...' : data.description;

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <RatingStars rating={data.rating} />

            <p>{changedDescription}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

        </Container>
    )
}