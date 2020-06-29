import * as React from 'react';

import Title from './Title';
import { Body1, Body2 } from './Body';

import styled from 'styled-components';

const _Hero = styled.div`
    color: ${props => (props.theme.colors.white)};
    word-break: break-word;
    text-align: center;
`;

function Hero() {
    return (
        <_Hero>
            <Title>{'U)tt{(2w"u&-$(#&'}</Title>
            <Body1>{ 'Sv*s"uwv2#" {"w2x{ w2w"u&-$({#"2s"v2vwu&-$({#"@2ewu)&w2s"-2x{ w2(-$w2s"v2!s{"(s{"2-#)&2$&{*su-3' }</Body1>
            <Body2>{'test test test'}</Body2>
        </_Hero>

    )
}

export default Hero;
