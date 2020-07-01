import * as React from 'react';

import { LanguageContext, languageOptions } from '../providers/Language';

import { CubbitIcon } from './Icons';
import Toggle from './Toggle';

import styled from 'styled-components';

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

const Header = () => {
    const languageContext = React.useContext(LanguageContext);

    const handleLanguageChange = (isOn) => {
        const selectedLanguage = languageOptions.find(item => item.id === languageOptions[isOn ? 1 : 0].id);
        languageContext.setLanguage(selectedLanguage);
    };

    return (
        <StyledHeader>
            <a href='/'><CubbitIcon /></a>

            <div className='toggle'>
                <Toggle
                    val1={languageOptions[0].text}
                    val2={languageOptions[1].text}
                    onToggle={(isOn) => handleLanguageChange(isOn)}
                />
            </div>
        </StyledHeader>
    )
};

export default Header;