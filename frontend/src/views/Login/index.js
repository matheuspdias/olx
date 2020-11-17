import React, {useState, useEffect} from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import Api from '../../api';

import Logo from '../../assets/logoolx.png';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [emailField, setEmailField] = useState();
    const [passwordField, setPasswordField] = useState();

    const handleLogin = async () => {
        if(emailField != '' && passwordField != '') {
            await Api.post('/auth/login', {
                email: emailField,
                password: passwordField
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
                            <S.Label>E-Mail</S.Label>
                            <S.Input type="text" name="email" onChange={e=>setEmailField(e.target.value)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <S.Label>Senha</S.Label>
                            <S.Input type="password" name="password" onChange={e=>setPasswordField(e.target.value)} className="form-control" />
                        </div>                        
                        <S.Separador></S.Separador>
                        <S.SignInButton onClick={handleLogin}>Entrar</S.SignInButton>
                    
                    <Link to="/signup">Não tem uma conta? <S.SignUpMessage>Cadastre-se</S.SignUpMessage> </Link>
                </S.Form>
            </S.FormArea>

            <S.PrivateText>
                Ao continuar, você concorda com os <S.TextBold>Termos de uso</S.TextBold> e a <S.TextBold>Política de Privacidade</S.TextBold> da OLX, e também, em receber comunicações via e-mail e push da OLX e seus parceiros
                </S.PrivateText>
        </S.Container>
    )
}
