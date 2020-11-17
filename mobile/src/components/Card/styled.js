import styled from 'styled-components/native';

export const CardArea = styled.TouchableOpacity`
    backgroundColor: #FFF;
    width: 100%;
    height: 150px;
    flexDirection: row;
    marginBottom: 10px;
    borderRadius: 10px;
`;

export const AreaImage = styled.View;

export const CardImage = styled.Image`
    width: 150px;
    height: 150px;
    resizeMode: cover;
`;

export const CardAreaInfo = styled.View`
    flex: 1;
    justifyContent: space-around;
    marginLeft: 20px;
    
`;

export const CardTitle = styled.Text`
    fontSize: 14px;
`;

export const CardPrice = styled.Text`
    fontWeight: bold;
    fontSize:16px;
`;

export const CardDate = styled.Text`
    color: #757575;
    fontSize: 12px;
`;