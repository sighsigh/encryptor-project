import * as React from 'react';

import styled from '../../theme';

interface Props {
    light?: boolean,
    className: string
}

const _DocIcon: React.FC<Props> = ({ className }) => (
    <svg className={className} width="38" height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 0H4C1.8 0 0 1.8 0 4V32H4V4H28V0ZM26 8L38 20V40C38 42.2 36.2 44 34 44H11.98C9.78 44 8 42.2 8 40L8.02 12C8.02 9.8 9.8 8 12 8H26ZM24 22H35L24 11V22Z" />
    </svg>
);

const DocIcon = styled(_DocIcon)`
    path {
        fill: ${props => props.light ? props.theme.colors.white : props.theme.colors.grey};
    }
`;

export default DocIcon;