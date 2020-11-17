import styled from 'styled-components';

export const HeaderArea = styled.div``;

export const Container = styled.section`
    display: flex;
    flex-direction: row;
`;

export const AnnouncementArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
`;

export const TitleAnnouncement = styled.h1`
    color: #4A4A4A;
    font-size: 24px;
    font-weight: 600;
`;

export const DateAnnouncement = styled.p`
    font-size: 12px;
    color: #999999;
`;

export const ImageAnnouncementArea = styled.div`
    width: 650px;
    height: 350px;
`;

export const ImageAnnouncement = styled.img`
    width: 100%;
    max-height: 100%;
    border-radius: 10px;
`;

export const PriceAnnouncement = styled.small`
    margin-top:20px;
    font-size: 24px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const DescriptionAnnouncement = styled.p`
    font-size: 16px;
    color: #4A4A4A;
    max-width: 650px;
`;

export const ButtonsArea = styled.div`
    margin-bottom: 20px;
    a{
        display: inline-flex;
        padding-left: 16px;
        padding-right: 16px;
        width: auto;
        height: 40px;
        font-size: 16px;
        min-width: 120px;
        border-radius: 32px;
        align-items: center;
        justify-content: center;
        padding: 0px 8px;
        background: transparent;
        color: rgb(247, 131, 35);
        border: 1px solid;
        margin-right: 20px;
    }
`;

export const LocationTitle = styled.small`
    font-size: 24px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const LocationArea = styled.div``;

export const LocationZipCode = styled.small`
    margin-right: 20px;
    font-size: 14px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const LocationCity = styled.small`
    font-size: 14px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const RightArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
`;

export const PriceArea = styled.div`
    background-color: #6E04D6;
    color: #FFF;
    font-size: 36px;
    font-weight: 300;
    width:300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-top: 60px;
    margin-bottom: 20px;
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    background-color: rgb(249, 249, 249);
    border: 1px solid rgb(216, 216, 216);
    align-items: center;
    justify-content: center;
`;

export const NameUser = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: rgb(50, 50, 50);
    margin-bottom: 20px;
`;

export const ButtonChatArea = styled.div`
    a{ 
        text-decoration: none;
        display: inline-flex;
        width: 250px;
        height: 40px;
        font-size: 16px;
        font-weight: bold;
        min-width: 120px;
        border-radius: 32px;
        align-items: center;
        justify-content: center;
        background: rgb(247, 131, 35);
        color: #FFF;
        border: 1px solid;
    }
`;

export const SeparatorLine = styled.div`
    width: 250px;
    border-bottom: 1px solid #CCC;
`;

export const LastAcessText = styled.p`
    margin-top:10px;
    font-size: 12px;
    color: #999;
`;


export const AllAnnouncementsArea = styled.div`
    a{ 
        color:#9027B0;
        font-weight: 600;
        text-decoration: none;
        transition: all ease 0.2s;
    }

    a:hover {
        color:#6E04D6;
    }
`;



