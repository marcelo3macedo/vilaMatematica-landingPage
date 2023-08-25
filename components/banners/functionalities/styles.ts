import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    padding: 40px;
`;

export const Container = styled.div`
    padding: 60px 20px;
    max-width: var(--maxWidth);
    margin: auto;
`;

export const Header = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px 0;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Footer = styled.div`
    padding: 40px 0;
    text-align: center;
`;

export const Details = styled.div`
    padding: 20px;
    text-align: left;
    line-height: 30px;
`;