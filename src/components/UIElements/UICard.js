import React from 'react';
import styled from 'styled-components/native';

import { TouchableWithoutFeedback } from 'react-native'

import UIImage from './UIImage';
import UIText from './UIText';

const CardContent = styled.View`
    justify-content: center;
    background-color: white;
    border: .5px solid gray;
    border-radius: 3px;
    margin: 5px 0 5px 10px;
    padding: 10px;
    box-shadow: 1px 1px 2px black;
    flex: 1;
`;

const Column = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NumberStyled = styled.Text`
    color: #919191;
    margin-bottom: 3px;
    font-weight: bold;
    font-size: 10;
`;

const UICard = ({ number, name, ThumbnailImage, onPress }) => {
    const Number = <NumberStyled >{`#${number}`}</NumberStyled>;

    return (<CardContent>
        <TouchableWithoutFeedback onPress={onPress}>
            <Column>
                <UIImage title={Number} uri={ThumbnailImage} />
                <UIText variant='header' bold value={name} />
            </Column>
        </TouchableWithoutFeedback>
    </CardContent>)
};

export default UICard;