import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    padding: 40px 0;
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

export const InfoArea = styled.div`
    max-width: 580px;
`;

export const Details = styled.div`
    padding-top: 40px;
`;

export const ImageArea = styled.div`
    padding-right: 20px;
`;

export const Actions = styled.div`
    margin-top: 40px;
    text-align: center;
`;