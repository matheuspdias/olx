import React, {useState, useEffect} from 'react'
import * as S from './styled';
import Header from '../../components/Header';

import Api from '../../../api';

import Camera from '../../assets/camera.svg';

export default ({ route }) => {    
    let idAnnouncement = route.params.id;
    const [announcement, setAnnouncement] = useState([]);     

    useEffect(()=> {
        const getAnnouncement = async () => {
            setAnnouncement([]);
            await Api.get(`/announcement/${idAnnouncement}`).then((res) => {
                console.log(res.data.data)
                setAnnouncement(res.data.data);
            });
        }  
        getAnnouncement();
    }, [idAnnouncement]);

    return (
        <>
       <S.Container>
           <Header title />
           <S.ImageArea>
                <S.Image source={{uri:announcement.images}} />
           </S.ImageArea>
           <S.InfoArea>
               <S.Price>R$ {announcement.price}</S.Price>               
               <S.Title>{announcement.title}</S.Title>
               <S.CreatedAt>Publicado em {announcement.created_at}</S.CreatedAt>
           </S.InfoArea>

           <S.Separador></S.Separador>

           <S.DescriptionArea>
               <S.DescriptionTitle>Descrição</S.DescriptionTitle>
               <S.DescriptionText>{announcement.description}</S.DescriptionText>
               <S.DescriptionMessageButton>
                   <S.DescriptionMessageButtonText>Ver descrição completa</S.DescriptionMessageButtonText>
               </S.DescriptionMessageButton>
           </S.DescriptionArea>

           <S.Separador></S.Separador>

           
           <S.LocationArea>
               <S.LocationTitle>Localização</S.LocationTitle>
               <S.Location>
                   <S.LeftLocation>
                       <S.CepTitle>CEP</S.CepTitle>
                       <S.CityTitle>Cidade</S.CityTitle>
                   </S.LeftLocation>
                   <S.RightLocation>
                       <S.CepText>08412030</S.CepText>
                       <S.CityText>{announcement.city}</S.CityText>
                   </S.RightLocation>
               </S.Location>
           </S.LocationArea>

           <S.Separador></S.Separador>

            <S.UserAnnouncement>
                <S.UserTitle>Anunciante</S.UserTitle>
                <S.UserAnnouncementArea>
                    <S.UserName>Matheus Pereira</S.UserName>
                    <S.UserCreatedAt>Na OLX desde março de 2018</S.UserCreatedAt>
                    <S.UserLastAcess>Último acesso em 09/10/2020</S.UserLastAcess>
                    <S.Separador></S.Separador>
                    <S.UserFullProfileButton>
                        <S.UserFullProfileText>Ver perfil completo</S.UserFullProfileText>
                    </S.UserFullProfileButton>
                </S.UserAnnouncementArea>
            </S.UserAnnouncement>         

       </S.Container>
       <S.ButtonAdd>
                <Camera width={24} height={24} fill="#FFF" /> 
                <S.ButtonAddText>Enviar Mensagem</S.ButtonAddText>
            </S.ButtonAdd>
       </>
    )
}
