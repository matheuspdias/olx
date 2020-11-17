import React, { useEffect } from 'react'
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import * as S from './styled';

import Api from '../../../api';

export default () => {

    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                 await Api.post('/auth/refresh', {
                    token
                }).then(async function (res) {
                    if(res.data.token) {

                     await AsyncStorage.setItem('token', res.data.token);
    
                        navigation.reset({
                            routes:[{name: 'MainDrawer'}]
                        });
    
                    } else {
                        navigation.navigate('SignIn');
                    }
                }).catch(async function (erro) {
                    console.log(erro)
                    navigation.navigate('SignIn');
                });                
            } else {
                navigation.navigate('SignIn');
            }
            
        }
        checkToken();
    }, []);

    return (
        <S.Container>
            <S.Logo source={logo}/>
            <S.Loading size="large" color="#FFF" />
        </S.Container>
    )
}
