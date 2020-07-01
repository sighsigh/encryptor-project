import * as React from 'react';

import Title from './Title';
import { Label } from '../providers/Language';

import styled from 'styled-components';

const StyledHero = styled.div`
    color: ${props => (props.theme.colors.white)};
    word-break: break-word;
    text-align: center;
`;

function Hero() {
    return (
        <StyledHero>
            <Title><Label name="hero_content" /></Title>
        </StyledHero>

    )
}

export default Hero;
