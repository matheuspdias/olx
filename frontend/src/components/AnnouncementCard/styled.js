import styled from 'styled-components';


export const Announcement = styled.div`
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction:column;
    margin-right: 30px;
`;

export const ImageAnnouncement = styled.img`
    width:100%;
    height: 150px;
    border-radius: 10px;
`;

export const DescriptionAnnouncement = styled.small`
    margin-top: 5px;
    color: #4a4a4a;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const PriceAnnouncement = styled.small`
    margin-top: 5px;
    color: rgb(74, 74, 74);
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif
`;
