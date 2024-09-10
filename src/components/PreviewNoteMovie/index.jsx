import { FiClock } from "react-icons/fi";

import { Container } from "./styles";

import { RatingStars } from "../RatingStars";
import { Tag } from "../Tag";

export function PreviewNoteMovie({ data, ...rest }) {
    return(
        <Container {...rest}>
            <div className='wrap-title-rating'>
                <h1>{data.title}</h1>

                <RatingStars rating={data.rating} />
            </div>

            <div className='wrap-avatar-author'>
                <img src={data.avatar} alt="Foto do autor" />
                
                <span>Por {data.author}</span>
                    
                
                <span><FiClock /> {data.created_at}</span>

            </div>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} isPreview />)
                    }
                </footer>
            }

            <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />
        </Container>
    )
}