import * as React from 'react';

import { LangContext } from '../providers/Language';

interface LabelProps {
    name: string
}

const Label = (props: LabelProps) => {
    const ctx = React.useContext(LangContext);
    return ctx.messages[props.name] || '';
}

export default Label;