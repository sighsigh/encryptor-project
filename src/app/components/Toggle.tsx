import * as React from 'react';

import styled from 'styled-components';

const StyledToggle = styled.div`
    background-color: ${props => props.theme.colors.blue};
    border-radius: 2px;
    color: ${props => (props.theme.colors.white)};
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    height: 40px;
    min-width: 240px;
    position: relative;

    &:before {
        background-color: ${props => props.theme.colors.light_grey};
        content: '';
        position: absolute;
        left: 2px;
        top: 2px;
        height: calc(100% - 4px);
        width: calc(100% / 2 - 4px);
        border-radius: inherit;
        transition: left .25s ease-in-out;
    }

    &.active:before {
        left: calc(50% + 2px);
    }

    & > div {
        width: 50%;
        z-index: 1;
    }
`;

interface Props {
    on?: boolean,
    onToggle: (isOn: boolean) => void,
    val1: string | React.ReactNode,
    val2: string | React.ReactNode
}

const Toggle: React.FC<Props> = ({on, onToggle, val1, val2}) => {
    const [isOn, setIsOn] = React.useState(false);

    React.useEffect(() => {
        setIsOn(on);
    }, [on]);

    const handleOnToggle = () => {
        setIsOn(!isOn);
        onToggle(!isOn);
    }

    return (
        <StyledToggle
            className={isOn ? 'active' : ''}
            onClick={handleOnToggle}>
            <div>{val1}</div>
            <div>{val2}</div>
        </StyledToggle>
    )
};

export default Toggle;
