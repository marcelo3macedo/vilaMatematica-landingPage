import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
`;

export const Button = styled.h4`
    color: var(--pallete01);
    background: var(--pallete02);
    width: max-content;
    padding: 20px 40px;
    border-radius: 35px;
    max-width: 100%;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;