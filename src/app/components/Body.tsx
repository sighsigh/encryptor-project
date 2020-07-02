import * as React from 'react';

import styled from '../theme';

interface Props {
    className: string,
    children: React.ReactChild,
}

const Body: React.FC<Props> = ({ className, children}) => (
    <p className={className}>{ children }</p>
);

export const Body1 = styled(Body)`
    font-size: 16px;
    line-height: 26px;
    margin: 0;
`;

export const Body2 = styled(Body)`
    color: ${props => props.theme.colors.dove_grey};
    font-size: 14px;
    line-height: 23px;
    margin: 0;
`;
