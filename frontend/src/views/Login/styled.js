import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #EEE;
`;

export const FormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 65vh;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 1em #666;
    -webkit-box-shadow: 0px 0px 1em #666;
    -moz-box-shadow: 0px 0px 1em #666;
`;

export const Form = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    a {
        text-decoration: none;
        color: #000;
        font-size: 15px;
    }
`;

export const Logo = styled.div`
    height: 40px;
    width: 70px;
    margin-top: -30px;
    margin-bottom: 50px;
`;

export const LogoImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const TitleText = styled.small`
    color: rgb(74, 74, 74);
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
`;

export const Label = styled.label`
    color: #000;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 350px;
    height: 50px;
`;

export const SignInButton = styled.button`
    display: flex;
    background-color: rgb(247, 131, 35);
    color: #FFF;
    font-weight: 600;
    border: 0;
    width: 350px;
    height: 50px;
    justify-content: center;
    align-items:center;
    border-radius: 30px;
    margin-bottom: 50px;
`;

export const Separador = styled.div`
    width: 350px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 50px;
`;

export const SignUpMessage = styled.small`
    color: rgb(110, 10, 214);
    font-size: 15px;
`;

export const PrivateText = styled.small`
    max-width: 500px;
    margin-left: 15px;
    margin-top: 20px;
    color: #999;
    line-height: 25px;
`;

export const TextBold = styled.strong`
    color: rgb(110, 10, 214);
`;

