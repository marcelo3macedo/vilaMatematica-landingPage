import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete03);
    padding: 60px 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 60px 20px;

    @media (max-width: 768px) {
        padding: 40px 20px;
        flex-direction: column;
        text-align: center;
    }
`;

export const Details = styled.div`
    max-width: 580px;
`;

export const Preview = styled.div`
    padding-right: 40px;
`;

export const Video = styled.video`
    width: 280px;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const Cellphone = styled.div`
    
`;

export const CellphoneImage = styled.img`
    position: absolute;
    width: 300px;
    margin-left: -8px;
    margin-top: -575px;
    z-index: 0;
`;

export const Title = styled.h1`
    color: var(--pallete01); 
`;

export const Buttons = styled.div`
    margin-top: 40px;
    text-align: center;
`;

export const Button = styled.h4`
    color: var(--pallete01);
    background: var(--pallete02);
    width: max-content;
    padding: 20px 40px;
    border-radius: 35px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Download = styled.img`
    position: absolute;
    z-index: 3;
    margin-top: -80px;
    margin-left: -100px;    
`;