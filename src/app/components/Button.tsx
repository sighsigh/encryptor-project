import styled from '../theme';

const Button = styled.button`
    background-color: transparent;
    border: 0;
    border-radius: 3px;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-family: ${props => (props.theme.font.family)};
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;
    padding: 5px 40px;
    min-width: 168px;
    height: 48px;
`;

const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.blue};
`;

const PrimaryButtonSmall = styled(PrimaryButton)`
    font-size: 16px;
    line-height: 26px;
    height: 36px;
    min-width: 116px;
`;

const SecondaryButton = styled(Button)`
    background-color: ${props => props.theme.colors.dark_blue};
`;

const ActionButton = styled(Button)`
    background-color: ${props => props.theme.colors.orange};
    padding: 5px 28px;
`;

export {
    PrimaryButton,
    PrimaryButtonSmall,
    SecondaryButton,
    ActionButton
}
