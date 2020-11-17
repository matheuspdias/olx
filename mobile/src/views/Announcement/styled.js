import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    backgroundColor: #FFF;
`;

export const ImageArea = styled.View`
    backgroundColor: #ccc;
    width: 100%;
    height: 300px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    resizeMode: cover;
`;

export const InfoArea = styled.View`
    marginLeft: 20px;
    marginTop: 5px;
`;

export const Price = styled.Text`
    fontSize: 28px;
    color: #4A4A4A;
    fontWeight: bold;
`;

export const Title = styled.Text`
    marginTop: 10px;
    fontSize: 18px;
    max-width: 90%;
    color: #111;
`;

export const CreatedAt = styled.Text`
    marginTop: 10px;
    color:#999;
`;

export const Separador = styled.View`
    backgroundColor: #EEE;
    height: 1px;
    width: 95%;
    marginTop: 10px;
    alignSelf: center;
`;

export const DescriptionArea = styled.View`
    marginLeft: 20px;
    marginTop: 10px;
`;

export const DescriptionTitle = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
    marginBottom: 10px;
`;

export const DescriptionText = styled.Text`
`;

export const DescriptionMessageButton = styled.TouchableOpacity`
    marginTop: 10px;
`;

export const DescriptionMessageButtonText = styled.Text`
    color: #7B1FA2;
`;

export const LocationArea = styled.View`
    marginLeft: 20px;
    marginBottom: 10px;
`;

export const LocationTitle = styled.Text`
    fontSize: 20px;
    fontWeight: bold;
    marginBottom: 10px;
`;

export const Location = styled.View`
    flexDirection: row;
`;

export const LeftLocation = styled.View`
    flex:1;
`;

export const RightLocation = styled.View`
    flex: 1;
`;

export const CepTitle = styled.Text`
    fontSize: 18px;
`;

export const CityTitle = styled.Text`
    fontSize: 18px;
    marginTop: 15px;
`;

export const CepText = styled.Text`
    fontSize: 18px;
    color: #4a4a4a;
    fontWeight: bold;
`;

export const CityText = styled.Text`
    fontSize: 18px;
    color: #4a4a4a;
    fontWeight: bold;
    marginTop: 15px;
`;

export const UserAnnouncement = styled.View`
    marginBottom: 50px;
`;

export const UserTitle = styled.Text`
    marginLeft: 20px;
    fontSize: 20px;
    fontWeight: bold;
    marginBottom: 10px;

`;

export const UserAnnouncementArea = styled.View`
    backgroundColor: #F1F1F1;
    width: 90%;
    alignSelf: center;
    borderRadius: 8px;
    borderTopWidth: 6px;
    borderTopColor: #4A4A4A;
`;

export const UserName = styled.Text`
    marginLeft: 20px;
    fontSize: 25px;
    fontWeight: bold;
    marginBottom: 10px;
`;

export const UserCreatedAt = styled.Text`
    marginLeft: 20px;
    marginBottom: 10px;
    color: #999;
`;

export const UserLastAcess = styled.Text`
    marginLeft: 20px;
    color: #999;
`;

export const UserFullProfileButton = styled.TouchableOpacity`
    marginLeft: 20px;
    marginBottom: 10px;   
`;

export const UserFullProfileText = styled.Text`
     color: #7B1FA2;
`;

export const NameAnnouncement = styled.Text``;

export const ButtonAdd = styled.TouchableOpacity`
    backgroundColor: #FF7043;
    width: 50%;
    height: 60px;
    borderRadius: 30px;
    justifyContent:center;
    alignItems: center;
    alignSelf:center;
    flexDirection: row;
    position: relative;
    bottom: 15px;
`;

export const ButtonAddText = styled.Text`
    fontWeight: bold;
    marginLeft: 15px;
    color: #FFF;
`;


