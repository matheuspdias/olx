import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #7B1FA2;
    justifyContent:center;
    alignItems: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    height: 60px;
    backgroundColor: #FFF;
    borderRadius: 30px;
    justifyContent: center;
    alignItems: center;
`;

export const ButtonLoginText = styled.Text`
    fontSize: 18px;
    color: #41C300;
    fontWeight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: center;
    marginTop: 50px;
    marginBottom: 20px;    
`;

export const SignMessageButtonText = styled.Text`
    fontSize: 16px;
    color: #FF6D00;
`;

export const SignMessageButtonTextBold = styled.Text`
    fontSize: 16px;
    color: #FF6D00;
    fontWeight:bold;
    marginLeft: 5px;
`;