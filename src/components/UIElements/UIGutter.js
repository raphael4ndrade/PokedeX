import React from 'react';
import styled from 'styled-components/native';

const GutterSeparator = styled.View`
    margin-right: ${props => props.size || 6}px;
`;

const GutterShell = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const UIGutter = ({ children }) => {
    let size = children.length - 1;

    return children.map((child, index) => {
        let Separator = Boolean(index < size) ? GutterSeparator : GutterShell;

        return (<GutterShell key={index}>
            {child}
            <Separator />
        </GutterShell>);
    });
}

export default UIGutter;