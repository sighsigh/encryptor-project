import * as React from 'react';

import { Body2 } from './Body';
import { Label } from '../providers/Language';

import styled from 'styled-components';

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
