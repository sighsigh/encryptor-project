import * as React from 'react';

import clsx from 'clsx';
import styled from 'styled-components';

interface Props {
    on?: boolean,
    val1: string | React.ReactNode,
    val2: string | React.ReactNode
}

const _Toggle = styled.div`
    background-color: ${props => props.theme.colors.blue};
    border-radius: 2px;
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
        transition: left .3s ease-in-out;
    }

    &.active:before {
        left: calc(50% + 2px);
    }

    & > div {
        width: 50%;
        z-index: 1;
    }
`;

const Toggle = (props: Props) => {
    const [isOn, setIsOn] = React.useState(false);
    const { on, val1, val2 } = props;

    React.useEffect(() => {
        setIsOn(on);
    }, [on]);

    return (
        <_Toggle
            className={clsx(isOn && 'active')}
            onClick={() => setIsOn(!isOn)}>

            <div>{val1}</div>
            <div>{val2}</div>
        </_Toggle>

    )
};



export default Toggle;
