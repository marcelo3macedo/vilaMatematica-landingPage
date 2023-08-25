import { PrimaryTextProps } from '@interfaces/texts/PrimaryTextProps';
import styled from 'styled-components';

export const Wrapper = styled.div`
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Content = styled.h3<PrimaryTextProps>`
    color: var(${props => props.color});
`;