import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete03);
    padding: 40px;
`;

export const Container = styled.div`
    padding: 60px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    @media (max-width: 768px) {
        padding: 40px 0;
        max-width: 380px;
    }
`;