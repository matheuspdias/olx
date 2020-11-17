import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import * as S from './styled';

import Api from '../../api';
import Header from '../../components/Header';

export default () => {
    let { id } = useParams();
    const [announcement, setAnnouncement] = useState([]);     

    useEffect(()=> {
        const getAnnouncement = async () => {
            setAnnouncement([]);
            await Api.get(`/announcement/${id}`).then((res) => {
                console.log(res.data.data);
                setAnnouncement(res.data.data);
            });
        }  
        getAnnouncement();
    }, [id]);

    return (
        <>
        <S.HeaderArea className="container">
            <Header />
        </S.HeaderArea>
        <S.Container className="container">            
            <S.AnnouncementArea className="col-md-8">
                <S.TitleAnnouncement>{announcement.title}</S.TitleAnnouncement>
                <S.DateAnnouncement>Pulicado em {announcement.created_at}</S.DateAnnouncement>
                <S.ImageAnnouncementArea>
                    <S.ImageAnnouncement src={announcement.images} />
                </S.ImageAnnouncementArea>
                <S.PriceAnnouncement>R$ {announcement.price}</S.PriceAnnouncement>
                <S.DescriptionAnnouncement>{announcement.description}</S.DescriptionAnnouncement>
                <S.ButtonsArea>
                    <Link to="/">Favoritar</Link>
                    <Link to="/">Compartilhar</Link>
                    <Link to="/">Denunciar</Link>
                </S.ButtonsArea>
                <S.LocationArea>
                    <S.LocationTitle>Localização</S.LocationTitle>
                    <S.LocationArea>
                        <S.LocationZipCode>Cep: {announcement.zipcode}</S.LocationZipCode>
                        <S.LocationCity>Cidade: {announcement.city}</S.LocationCity>
                    </S.LocationArea>
                </S.LocationArea>
            </S.AnnouncementArea>
            <S.RightArea className="col-md-4">
                <S.PriceArea>R$ {announcement.price}</S.PriceArea>
                <S.InfoArea>
                    <S.NameUser>{announcement.name}</S.NameUser>
                    <S.ButtonChatArea>
                        <a target="_blank" href={`https://api.whatsapp.com/send?phone=55${announcement.phone}&text=Ol%C3%A1%20${announcement.name}%20estou%20interessado%20no%20seu%20an%C3%BAncio%20da%20olx`}>Mensagem via whatsApp</a>
                    </S.ButtonChatArea>
                    <S.LastAcessText>Último acesso há 11 horas </S.LastAcessText>
                    <S.SeparatorLine></S.SeparatorLine>
                    <S.AllAnnouncementsArea>
                        <S.LastAcessText>Na OLX desde março de 2020 </S.LastAcessText>
                        <Link to="/">Ver todos anúncios</Link>
                    </S.AllAnnouncementsArea>
                </S.InfoArea>
            </S.RightArea>
        </S.Container>
        </>
    )
}
