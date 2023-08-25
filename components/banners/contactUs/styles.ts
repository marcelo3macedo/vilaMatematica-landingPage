import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    padding: 40px;

    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const Container = styled.div`
    padding: 60px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`;

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 80px 0;

    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 40px 0;
    }
`;

export const Block = styled.div`
    width: 50%;

    
    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const Link = styled.div`
    padding: 10px 0;
`;