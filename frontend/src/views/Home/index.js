import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Api from '../../api';

import Header from '../../components/Header';
import AnnouncementCard from '../../components/AnnouncementCard';

export default () => {
    
    const [categories, setCategories] = useState([]);
    const [announcements, setAnnouncements] = useState([]);

    const getCategories = async () => {
        setCategories([]);

        await Api.get('/categories').then((res) => {
            console.log(res.data);
            setCategories(res.data);
        });
    }

    const getAnnouncements = async () => {
        setAnnouncements([]);

        await Api.get('/announcements').then((res) => {
            console.log(res.data.data);
            setAnnouncements(res.data.data);
        });
    }

    useEffect(()=>{
        getCategories();
    }, [])

    useEffect(()=> {
        getAnnouncements();
    }, [])
    

    return (
        <>
        <S.Container className="container">
            <Header />
        </S.Container>
        <S.BannerArea className="container-fluid">
            <S.Banner>
            <form>
                <S.Input placeholder="Estou procurando por..." />
            </form>
            <S.CategoriesArea>

                {categories &&
                    categories.map((item, key) => (
                        <Link to="/" key={key}>
                                <S.CategoryItem>
                                    <S.CategoryImage src={item.covercategory} />
                                </S.CategoryItem>
                                <S.CategoryTitleArea>
                                <S.CategoryItemTitle>{item.name}</S.CategoryItemTitle>
                                </S.CategoryTitleArea>
                        </Link>
                    ))}
                                 

            </S.CategoriesArea>
            </S.Banner>
        </S.BannerArea>

        <S.Announcements className="container">
                <S.Title>Anúncios recentes</S.Title>

            
            <S.AnnouncementsArea>
            {announcements.map((item, key) => (

                <AnnouncementCard data={item} key={key} />
                 /*<Link to="/" key={key}>
                    <S.Announcement>
                        <S.ImageAnnouncement src={item.cover} />
                        <S.DescriptionAnnouncement>{item.title} </S.DescriptionAnnouncement>
                        <S.PriceAnnouncement>{item.price}</S.PriceAnnouncement>
                    </S.Announcement>
                </Link>*/
            ))}
               

            </S.AnnouncementsArea>
        </S.Announcements>

        
        </>
    )
}
