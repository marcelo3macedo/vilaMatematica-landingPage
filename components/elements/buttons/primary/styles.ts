import styled from 'styled-components';

export const Wrapper = styled.div`
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