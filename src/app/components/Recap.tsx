import * as React from 'react';

import { DocIcon } from './Icons';

import styled from 'styled-components';

const StyledRecap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .filename {
        margin-top: 16px;
    }

    &.light {
        .filename {
            color: ${props => props.theme.colors.white}
        }
    }
`;

interface Props {
    light?: boolean
    text: string
}

const Recap: React.FC<Props> = (props) => (
    <StyledRecap className={props.light ? 'light' : ''}>
        <DocIcon light={props.light} />
        <div className='filename'>
            {props.text}
        </div>
    </StyledRecap>
);

export default Recap;