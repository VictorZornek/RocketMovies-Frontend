import { Container } from './styles.js';

import { Tag } from '../Tag';

export function NoteMovie({ data, ...rest }) {
    const descriptionLimit = 362

    const changedDescription = data.description.length > descriptionLimit ? data.description.substring(0, descriptionLimit) + '...' : data.description;

    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <span>{data.rating}</span>

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