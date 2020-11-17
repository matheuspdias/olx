import styled from 'styled-components/native';

export const HeaderArea = styled.View`
    backgroundColor: #7B1FA2;
    width: 100%;
    height: 50px;
    flexDirection :row;
    alignItems: center;
    justifyContent: space-between;
`;

export const HeaderIconMenuArea = styled.View`
    marginLeft: 20px;
`;

export const HeaderIconOthersArea = styled.View`
    flexDirection: row;
    marginRight: 20px;
    width: 70px;
    justifyContent: space-between;
`;

export const Text = styled.Text`
    justifyContent: center;
    color: #FFF;
    fontSize: 20px;
    font-weight: bold;
`;