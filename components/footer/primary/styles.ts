import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--dark);
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
`;

export const Actions = styled.div`
    padding: 40px;

    
    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`;

export const Copyright = styled.div`
    padding: 20px 0 15px 0;
    text-align: center;
`;

export const Link = styled.div`
    padding: 10px 0;
`;