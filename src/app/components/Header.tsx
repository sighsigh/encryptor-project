import * as React from 'react';

import CubbitIcon from './CubbitIcon';
import Toggle from './Toggle';

import styled from 'styled-components';

const _Header = ({ className }) => (
    <div className={className}>
        <CubbitIcon />
        <div className='toggle'>
            <Toggle
                val1='Encrypted'
                val2='--------'
            />
        </div>
    </div>
);

const Header = styled(_Header)`
    background: ${props => props.theme.colors.grey};
    display: flex;
    align-items: center;
    height: 72px;
    padding: 0 23px;
    position: relative;

    @media ${props => props.theme.media_queries.phone_only} {
        .toggle {
            position: absolute;
            top: calc(100% + 24px);
            left: 50%;
            transform: translateX(-50%)
        }
    }

    @media ${props => props.theme.media_queries.tablet_up} {
        justify-content: space-between;

        .toggle {
            margin-right: 160px;
        }
    }
`;

export default Header;