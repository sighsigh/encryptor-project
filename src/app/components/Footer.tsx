import * as React from 'react';

import { Body2 } from './Body';
import Label from './Label';

import styled from '../theme';

const StyledFooter = styled.div`
    margin-bottom: 24px;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter>
            <Body2><Label name='footer_content' /></Body2>
        </StyledFooter>
}

export default Footer;
