import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import Api from '../../api';

import Logo from '../../assets/logoolx.png';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [phoneField, setPhoneField] = useState('');

    const handleSignUp = async () => {
        if(emailField != '' && passwordField != '' && nameField != '' && phoneField != '') {
            await Api.post('/user', {
                name: nameField,
                email: emailField,
                phone: phoneField,
                password: passwordField,
                city: 'São Paulo'
            }).then((res) => {
                if(res.data.token) {
                    dispatch({
                        type: 'SET_TOKEN',
                        payload: { token: res.data.token}
                    });        
                    dispatch({
                        type: 'SET_NAME',
                        payload: { name: res.data.data.name}
                    });             
                    history.replace('/');
                } else {
                    alert(res.data.error)
                }
            })
        } else {
             alert('preencha todos os campos')
             return null;
        }
    }

    return (
        <S.Container className="">
            <S.FormArea>
                <S.Form>
                    <S.Logo>
                        <S.LogoImage src={Logo} />
                    </S.Logo>                    
                        <div className="form-group">
                            <S.Label>Nome</S.Label>
                            <S.Input type="text" name="name" onChange={e=>setNameField(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <S.Label>E-Mail</S.Label>
                            <S.Input type="email" name="email" onChange={e=>setEmailField(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <S.Label>Telefone</S.Label>
                            <S.Input type="phone" name="name" onChange={e=>setPhoneField(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <S.Label>Senha</S.Label>
                            <S.Input type="password" name="password" onChange={e=>setPasswordField(e.target.value)} className="form-control" />
                        </div>                        
                        <S.Separador></S.Separador>
                        <S.SignInButton onClick={handleSignUp}>Cadastrar</S.SignInButton>
                    
                    <Link to="/login">Já é cadastrado? <S.SignUpMessage>Faça login</S.SignUpMessage> </Link>
                </S.Form>
            </S.FormArea>

            <S.PrivateText>
                Ao continuar, você concorda com os <S.TextBold>Termos de uso</S.TextBold> e a <S.TextBold>Política de Privacidade</S.TextBold> da OLX, e também, em receber comunicações via e-mail e push da OLX e seus parceiros
                </S.PrivateText>
        </S.Container>
    )
}
