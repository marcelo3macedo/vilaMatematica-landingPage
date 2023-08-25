import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 40px;
`;

export const Image = styled.img`
    max-width: 270px;
    
    @media (max-width: 768px) {
        max-width: 220px;
    }
`;