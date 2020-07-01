import * as React from 'react';

import {CubbitIcon} from './Icons';
import Toggle from './Toggle';

import styled from 'styled-components';

const _Header = ({ className }) => (
    <div className={className}>
        <a href='/'><CubbitIcon /></a>

        <div className='toggle'>
            <Toggle
                val1='Encrypted'
                val2={'W"y {\'z'}
                onToggle={() => {}} // TODO: run a real func
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