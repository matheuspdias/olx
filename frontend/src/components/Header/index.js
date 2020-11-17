import React from 'react';
import * as S from './styled';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/logoolx.png';
import Api from '../../api';

export default ({logged}) => {

    const token = useSelector(state => state.UserReducer.token);
    const name = useSelector(state => state.UserReducer.name);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        Api.post(`auth/logout?token=${token}`).then((res) => {
            dispatch({
                type: 'SET_TOKEN',
                payload: { token: ''}
            });    
            dispatch({
                type: 'SET_NAME',
                payload: { name: 'Visítante'}
            });  
            history.push('/');
        });  
    }

    return (
        <S.HeaderArea>
            <S.HeaderLeft>
                <Link to="/">
                    <S.Logo src={Logo} />
                </Link>                
                <Link to="/">Buscar</Link>
            </S.HeaderLeft>
            <S.HeaderRight>
                <S.MenuItem>
                </S.MenuItem>
                <S.MenuItem>
                    <Link to="/">Meus Anúncios</Link>
                </S.MenuItem>

                {!token &&
                    <S.MenuItem>
                        <Link to="/login">Entrar</Link>
                    </S.MenuItem>
                }

                {token &&
                    <S.MenuItem>
                        <S.ButtonLogout onClick={handleLogout}>Sair</S.ButtonLogout>
                     </S.MenuItem>
                }
                
                {logged ?
                 <Link to="/announcement">
                    <S.UserName>Olá, {name}</S.UserName>
                </Link>                   
                    :
                <Link to="/announcement">
                    <S.ButtonAdd>Anunciar</S.ButtonAdd>
                </Link>
                }
            </S.HeaderRight>
        </S.HeaderArea>
    )
}
