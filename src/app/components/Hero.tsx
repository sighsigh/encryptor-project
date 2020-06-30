import * as React from 'react';

import Title from './Title';

import styled from 'styled-components';

const StyledHero = styled.div`
    color: ${props => (props.theme.colors.white)};
    word-break: break-word;
    text-align: center;
`;

function Hero() {
    return (
        <StyledHero>
            <Title>{'U)tt{(2w"u&-$(#&'}</Title>
        </StyledHero>

    )
}

export default Hero;
