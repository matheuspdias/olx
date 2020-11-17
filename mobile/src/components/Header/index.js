import React from 'react'
import * as S from './styled';

import MenuIcon from '../../assets/menu.svg';
import SearchIcon from '../../assets/search.svg';
import FavoriteIcon from '../../assets/favorite.svg'; 

export default ({title}) => {

    return (
        <S.HeaderArea>
            <S.HeaderIconMenuArea>
                <MenuIcon width={24} height={24} fill="#FFF" />
            </S.HeaderIconMenuArea>
            {title && <S.Text>Anúncio</S.Text>}
            <S.HeaderIconOthersArea>                
                <SearchIcon width={24} height={24} fill="#FFF" />
                <FavoriteIcon width={24} height={24} fill="#FFF"  />
            </S.HeaderIconOthersArea>
        </S.HeaderArea>
    )
}
