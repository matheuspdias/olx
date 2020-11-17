import React, { useState } from 'react'
import * as S from './styled';
import { useNavigation } from '@react-navigation/native';

import Api from '../../../api';

import SignInput from '../../components/SignInput';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
    const navigation = useNavigation();
    const [phoneField, setPhoneField] = useState('');
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignMessageClick = () => {
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    const handleSignClick = async () => {
        if(nameField != '' && phoneField != '' && emailField != '' && passwordField != '') {
            await Api.post('/user', {
                name:nameField,
                phone:phoneField,
                email:emailField,
                password:passwordField
            }).then(async function (res) {
                console.log(res.data.token)
                if(res.data.token) {
                    await AsyncStorage.setItem('token', res.data.token);

                    navigation.reset({
                        routes:[{name:'MainDrawer'}]
                    });
                } else {
                    alert(res.data.error);
                }       
            });
        } else {
            alert("Preencha todos os campos!");
        }
    }

    return (
        <S.Container>
            <S.InputArea>
                
               <SignInput
                    placeholder="Digite Seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />

                <SignInput
                    placeholder="Digite Seu Telefone"
                    value={phoneField}
                    onChangeText={t=>setPhoneField(t)}
                />

                <SignInput
                    placeholder="Digite seu E-Mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                
                <SignInput
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                <S.ButtonLogin onPress={handleSignClick}>
                    <S.ButtonLoginText>Cadastrar</S.ButtonLoginText>
                </S.ButtonLogin>
                <S.SignMessageButton onPress={handleSignMessageClick}>
                    <S.SignMessageButtonText>Já possui uma conta?</S.SignMessageButtonText>
                    <S.SignMessageButtonTextBold>Faça login agora</S.SignMessageButtonTextBold>
                </S.SignMessageButton>
            </S.InputArea>
        </S.Container>
    )
}
