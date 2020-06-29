import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    color: ${props => props.theme.colors.dark};
    font-family: ${props => (props.theme.font.family)};
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    padding: 5px 40px;
    @media (min-width: 769px) {
        color: red;
    }
`; // TODO: remove red

const PrimaryButton = styled(Button)`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.dark};
`;

const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.blue};
`

export {
    PrimaryButton,
    SecondaryButton
}
