import * as React from 'react';

import { useSelector } from 'react-redux';
import { isoCodeSelector } from '../selectors';

import { CubbitIcon } from './Icons';
import Toggle from './Toggle';
import Label from './Label';

import styled from '../theme';

const StyledHeader = styled.div`
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

interface Props {
    onChangeLang: () => void
}

const Header = (props: Props) => (
    <StyledHeader>
        <a href='/'><CubbitIcon /></a>

        <div className='toggle'>
            <Toggle
                val1={<Label name='xx_lang_content' />}
                val2={<Label name='en_lang_content' />}
                onToggle={props.onChangeLang}
            />
        </div>
    </StyledHeader>
);

export default Header;