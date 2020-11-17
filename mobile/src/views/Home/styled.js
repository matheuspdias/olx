import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    backgroundColor: #DDD;
`;

export const ViewCards = styled.ScrollView`
    width: 100%;
    margin: 10px;
    paddingRight: 20px;
    display: flex;
`;

export const ButtonAdd = styled.TouchableOpacity`
    backgroundColor: #FF7043;
    width: 50%;
    height: 60px;
    borderRadius: 30px;
    justifyContent:center;
    alignItems: center;
    alignSelf:center;
    flexDirection: row;
    position: absolute;
    bottom: 15px;
`;

export const ButtonAddText = styled.Text`
    fontWeight: bold;
    marginLeft: 15px;
    color: #FFF;
`;






