import { PrimaryTextProps } from '@interfaces/texts/PrimaryTextProps';
import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Content = styled.h3<PrimaryTextProps>`
    color: var(${props => props.color});
`;