import React, { useState, useEffect } from 'react'
import * as S from './styled';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Camera from '../../assets/camera.svg';

import Header from '../../components/Header';
import Card from '../../components/Card';

import Api from '../../../api';

export default () => {

    const navigation = useNavigation();
    const [announcements, setAnnouncements] = useState([]);

    const getAnnouncements = async () => {
        const token = await AsyncStorage.getItem('token');
        setAnnouncements([]);

        await Api.get(`/announcements?token=${token}`).then(async function (res) {
            await setAnnouncements(res.data.data);
            
        });
    }

    const handleButtonAdd = () => {
        navigation.navigate('Add');
    }

    useEffect(() => {
        getAnnouncements();
    }, []);

    return (
        <S.Container>
            <Header />

            <S.ViewCards>
                {announcements.map((item, k) => (
                    <Card key={k} data={item} />
                ))}
            </S.ViewCards>
            <S.ButtonAdd onPress={handleButtonAdd}>
                <Camera width={24} height={24} fill="#FFF" /> 
                <S.ButtonAddText>Anunciar Agora</S.ButtonAddText>
            </S.ButtonAdd>            
        </S.Container>
    )
}

