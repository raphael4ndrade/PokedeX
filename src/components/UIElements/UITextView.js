import React from 'react';

import styled from 'styled-components/native';

import UIText from './UIText';

const Column = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UITextView = ({ title, text, bold, autoHeight, children }) => {
    let _text = Boolean(children) ? null : text;

    return (
        <Column autoHeight={autoHeight}>
            <UIText bold={bold} value={title}/>
            {_text && <UIText value={_text} />}
            {children}
        </Column>
    );
}

UITextView.defaultProps = {
    title: null,
    bold: false
}

export default UITextView;
