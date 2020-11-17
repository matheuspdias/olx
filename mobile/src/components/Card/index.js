import React from 'react';
import * as S from './styled';
import { useNavigation } from '@react-navigation/native';

export default ({ data }) => {
    const navigation = useNavigation();

    const handleOneAnnouncement = async () => {
        navigation.navigate('Announcement', {id: data.id})
    }

    return (                
        <S.CardArea onPress={handleOneAnnouncement}>
            <S.CardImage source={{uri: data.images}} />
            <S.CardAreaInfo>
                <S.CardTitle>{data.title}</S.CardTitle>
                <S.CardPrice>R$ {data.price},00</S.CardPrice>
                <S.CardDate>{data.created_at}</S.CardDate>
            </S.CardAreaInfo>
        </S.CardArea>
    )
}