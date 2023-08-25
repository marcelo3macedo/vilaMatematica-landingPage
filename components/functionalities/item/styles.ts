import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
    margin: 20px 0;

    @media (max-width: 768px) {
        width: 100%;
    }    
`;

export const Title = styled.div`
    padding: 10px 0;
`;

export const Description = styled.div`
    padding: 20px 10px;
    min-height: 120px;
`;

export const PictureArea = styled.div`
    padding: 20px 10px;
    text-align: center;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Picture = styled.img`
    max-width: 350px;

    @media (max-width: 768px) {
        max-width: 300px;        
    }    
`;