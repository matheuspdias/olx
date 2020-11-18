import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import * as S from './styled';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

import Api from '../../../api';

export default function index() {    

    const navigation = useNavigation();

    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState();

    const imagePickerOptions = {
        title: "Selecione uma imagem",
    }

    const getCategories = async () => {
        await Api.get('/categories').then((res) => {
            setCategories(res.data);
        })
    }

    useEffect(()=>{
        getCategories();
    }, [])

    const handleSubmit = async () => {
        const token = await AsyncStorage.getItem('token'); 
        
        if (title && category && description && price) {
        let uploadData = new FormData();
        uploadData.append('title', title);
        uploadData.append('category', category);
        uploadData.append('description', description);
        uploadData.append('price', price);
        uploadData.append('zipcode', '08412030');
        if(image) {
            uploadData.append('cover', {
                uri: `file://${image.path}`,
                type:image.type,
                name: image.fileName
            });
        }

        try {
            const res = await Api.post(`/announcement?token=${token}`, uploadData, {headers: {"Content-type": "multipart/form-data"}});
            alert('Anúncio cadastrado com sucesso!')
            navigation.reset({
                routes:[{name: 'MainDrawer'}]
            });
            
        }

        catch(err) {
            console.log(err)
        }

           } else {
                alert('Prencha todos os campos!');
            }
        }

     SelectImage = async () => {
        ImagePicker.showImagePicker({ mediaType: 'photo'}, (response) => {
            if(response.didCancel) {
                return;
            }

            if(response.error) {
                alert(response.error);
                return;
            }

            setImage(response)
        })
    }

    

    return (
        <S.Container>
            <S.ImageCoverArea source={{
                 uri: image ? image.uri :
                 'https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2018/12/fundo-cinza-claro7-1024x683.jpg?resize=696%2C464&ssl=1'
                 }}>
                <S.AddImageButton onPress={SelectImage}>
                    <S.AddImageButtonText>Adicionar imagem</S.AddImageButtonText>
                </S.AddImageButton>
            </S.ImageCoverArea>
            <S.FormArea>
                <S.InputsArea>
                    <S.InputTitle>Título do anúncio*</S.InputTitle>
                    <S.TextInput
                     placeholder="Ex: samsung S9 novo na caixa"
                     onChangeText={t=> setTitle(t)}
                     value={title}
                      >                          
                      </S.TextInput>
                </S.InputsArea>

                <S.InputsArea>
                    <S.InputTitle>Descrição</S.InputTitle>
                    <S.TextInputDesc 
                    multiline 
                    placeholder="Ex: Smarthphone Samsung Galaxy S9 com 128gb de memória com caixa, todos os cabos e sem marca de uso"
                    onChangeText={t=> setDescription(t)}
                    value={description}
                    />
                </S.InputsArea>

                <S.InputsArea>
                    <S.InputTitle>Categoria</S.InputTitle>
                    <S.PickerArea>
                        <Picker
                            selectedValue={category}
                            borderStyle="solid"
                            borderColor="#000"
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                        >
                            <Picker.Item label="Selecione uma categoria" value="" />
                            {categories.map((item, key) => (
                                <Picker.Item key={key} label={item.name} value={item.id} />
                            ))}
                        </Picker>
                    </S.PickerArea>
                </S.InputsArea>

                <S.InputsArea>
                    <S.InputTitle>Cidade</S.InputTitle>
                    <S.TextInput 
                        onChangeText={t=> setCity(t)}
                        value={city}
                    />
                </S.InputsArea>
                
                <S.InputsArea>
                    <S.InputTitle>Preço</S.InputTitle>
                    <S.TextInput 
                        onChangeText={t=> setPrice(t)}
                        value={price}
                    />
                </S.InputsArea>

            </S.FormArea>


            <S.ButtonSubmit onPress={handleSubmit}>
                <S.ButtonSubmitText>Enviar Anúncio</S.ButtonSubmitText>
            </S.ButtonSubmit>
            <S.TermsPrivateText>
                Ao publicar você concorda e aceita nossos <S.TermsPrivateTextBold>Termos e uso </S.TermsPrivateTextBold>
                 e <S.TermsPrivateTextBold>Privacidade</S.TermsPrivateTextBold>
             </S.TermsPrivateText>
        </S.Container>
    )
}
