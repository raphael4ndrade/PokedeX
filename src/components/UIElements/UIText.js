import React from 'react';

import styled from 'styled-components/native';

const fontSize = {
    header: 22,
    normal: 12
};

export const TextStyled = styled.Text`
    font-size: ${props => fontSize[props.variant]};
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    font-family: Helvetica;
    color: #313131;
    margin-bottom: 3;
`;

const UIText = (props) => {
    return <TextStyled {...props}>{props.value}</TextStyled>
}

UIText.defaultProps = {
    variant: 'normal',
    bold: false
}

export default UIText;