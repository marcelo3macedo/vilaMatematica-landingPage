import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete03);
    padding: 60px 0;

    &:hover {
        cursor: pointer;
    }
`;

export const Video = styled.video`
    width: 280px;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 2;

    @media (max-width: 768px) {
        width: 200px;
    }
`;

export const Cellphone = styled.div`    
    
`;

export const CellphoneImage = styled.img`
    position: absolute;
    width: 300px;
    margin-left: -8px;
    margin-top: -575px;
    z-index: 0;

    
    @media (max-width: 768px) {
        width: 228px;
        margin-top: -434px;
        margin-left: -113px;
    }
`;

export const Download = styled.img`
    position: absolute;
    z-index: 3;
    margin-top: -80px;
    margin-left: -100px;   

    @media (max-width: 768px) {
        width: 228px;
        margin-top: -40px;
        margin-left: 0px; 
    }
`;