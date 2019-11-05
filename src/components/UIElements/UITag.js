import React from 'react';
import styled from 'styled-components/native';

import { tagStyles } from '../typeHelper';

const TagStyled = styled.View`
    border-radius: 10px;
    background-color: ${props => props.backgroundColor};
    padding: 4px;
    elevation: 1;
    min-width: 72;
    box-shadow: 1px 1px 1px black;
`;

const TagTextStyled = styled.Text`
    font-size: 12;
    font-family: Arial;
    text-transform: uppercase;
    text-align: center;
    align-items: center;
    color: ${props => props.color};
`;

const Tag = ({ value, backgroundColor = '#FFF', color = '#000' }) => {
    return <TagStyled backgroundColor={backgroundColor}>
        <TagTextStyled color={color}>{value}</TagTextStyled>
    </TagStyled>
};

const UITag = ({ value }) => {
    const styles = tagStyles[value.toLowerCase()];

    return <Tag {...styles} value={value} />
}

export default UITag;