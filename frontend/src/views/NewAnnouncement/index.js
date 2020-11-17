import React, {useState, useEffect} from 'react'
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Api from '../../api';


import Header from '../../components/Header';

export default () => {
    const LoggedUser = useSelector(state => state.UserReducer.name)
    const token = useSelector(state => state.UserReducer.token);
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [cover, setCover] = useState();


    useEffect(()=> {
        const getCategories = async () => {
           await Api.get('/categories').then((res) => {
                console.log(res.data);
                setCategories(res.data);
            })
        }
        getCategories();
    }, [])

    useEffect(() => {
        console.log(cover)
    }, [cover])

    const handleSubmit = async () => {
        if(title != '' && description != '' && category != '' && price != '' && zipcode != '') {
            const fd = new FormData();            
            fd.append('title', title);
            fd.append('description', description);
            fd.append('category', category);
            fd.append('price', price);
            fd.append('zipcode', zipcode);
            fd.append('cover', cover, cover.name);
            
            await Api.post(`/announcement?token=${token}`, fd, {
                onUploadProgress: ProgressEvent => {
                    console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
                }
            })
            .then((res) => {
                console.log(res);
                alert('Anuncio cadastrado')
                history.push('/')
            }).catch((res) => {
                console.log(res)            
            })
        } else {
            alert('Preencha todos os campos')
        }
    }

    return (
        <S.Container className="container">
            <Header logged={LoggedUser} />

            <S.TitlePage>O que você está anunciando?</S.TitlePage>

            <S.FormArea>
                <S.Input placeholder="Titulo" onChange={e=>setTitle(e.target.value)}></S.Input>
                <S.TextArea placeholder="Descrição" onChange={e=>setDescription(e.target.value)}></S.TextArea>
                <S.Text>Categorias</S.Text>
                <S.Select value={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    {categories.map((categories) =>
                         <option key={categories.id} value={categories.id}>{categories.name}</option>
                    )}
                </S.Select>                

                <S.Text>Localização</S.Text>
                <S.Input placeholder="CEP*" onChange={e=>setZipcode(e.target.value)}></S.Input>

                <S.Text>Preço</S.Text>
                <S.Input placeholder="R$" onChange={e=>setPrice(e.target.value)}></S.Input>
                
                <S.Text>Contato</S.Text>
                <S.Contact>(11) 97604-8255</S.Contact>

                <S.Text>Adicionar capa</S.Text>
                <S.ButtonAddPhoto type="file" name="cover" onChange={e=>setCover(e.target.files[0])}></S.ButtonAddPhoto>

                <S.Alert>
                Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém entrar em contato em nome da OLX.
                </S.Alert>

            </S.FormArea>

            <S.SubmitArea>
                <S.PrivateText>Ao publicar você concorda e aceita nossos Termos de Uso e Privacidade</S.PrivateText>
                <S.ButtonSubmit onClick={handleSubmit}>Enviar anúncio</S.ButtonSubmit>
            </S.SubmitArea>
        </S.Container>
    )
}
