import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    backgroundColor: #FFF;
`;

export const ImageCoverArea = styled.ImageBackground`
    width:100%;
    height: 250px;
    marginBottom: 10px;
    justifyContent: center;
    alignItems: center;
`;

export const FormArea = styled.View`
    flex:1;    
    marginBottom: 20px;
`;

export const PickerArea = styled.View`
    width: 100%;
    height: 40px;
    border: 1px solid #DDD;
    borderRadius: 5px;
    justifyContent: center;
`;

export const InputsArea = styled.View`
    flex: 1;
    margin: 10px;
`;

export const InputTitle = styled.Text`
    color: #000;
    fontSize: 18px;
    marginBottom: 10px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 40px;
    border: 1px solid #DDD;
    borderRadius: 5px;
    paddingLeft: 10px;
`;

export const TextInputDesc = styled.TextInput`
    width:100%;
    height: 100px;
    border: 1px solid #DDD;
    borderRadius: 5px;
    paddingLeft: 10px;
    textAlignVertical: top;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    backgroundColor: #FF7043;
    alignSelf: center;
    justifyContent: center;
    alignItems: center;
    borderRadius: 40px;
    marginBottom: 20px;
`;

export const ButtonSubmitText = styled.Text`
    fontSize:16px;
    color: #FFF;
`;

export const TermsPrivateText = styled.Text`
    fontSize: 14px;
    paddingLeft: 20px;
    marginBottom: 20px;
`;

export const TermsPrivateTextBold = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #7B1FA2;
`;

export const AddImageButton = styled.TouchableOpacity`
    backgroundColor: #7159C1;
    height: 50px;
    width: 150px;
    borderRadius: 3px;
    justifyContent: center;
    alignItems: center;
`;

export const AddImageButtonText = styled.Text`
    color: #FFF;
`;



