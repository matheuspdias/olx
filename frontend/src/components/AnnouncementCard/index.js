import React from 'react'
import * as S from './styled';
import { Link } from 'react-router-dom';

export default (data) => {    
    return (
        <Link to={`announcement/${data.data.id}`}>
            <S.Announcement>
                <S.ImageAnnouncement src={data.data.images} />
                <S.DescriptionAnnouncement>{data.data.title} </S.DescriptionAnnouncement>
                <S.PriceAnnouncement>R$ {data.data.price}</S.PriceAnnouncement>
            </S.Announcement>
        </Link>
    )
}
