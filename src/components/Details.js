import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import UIImage from './UIElements/UIImage';
import UIText from './UIElements/UIText';
import UITextView from './UIElements/UITextView';
import UITag from './UIElements/UITag';
import UIGutter from './UIElements/UIGutter';

const Row = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5px;
`;

const DetailView = styled.View`
    margin-top: ${props => props.marginVertical}px; 
    margin-bottom: ${props => props.marginVertical}px; 
    margin-left: ${props => props.marginHorizontal}px; 
    margin-right: ${props => props.marginHorizontal}px; 
    padding: 20px;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    opacity: 1;
    backgroundColor: lightblue;
`;

const ButtonStyled = styled.View`
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    position: absolute;
    top: -5;
    right: -5;
`;

const Details = ({ name, type, weakness, abilities, ThumbnailImage, onClose }) => {
    const layoutProps = {
        marginVertical: 0.5 * Dimensions.get('window').width,
        marginHorizontal: 0.05 * Dimensions.get('window').height
    };

    return (
        <DetailView {...layoutProps}>

            <UIImage title={<UIText variant='header' value={name} />}
                uri={ThumbnailImage} lg />

            <UITextView title='Type'>
                <Row>
                    <UIGutter>{type.map(e => <UITag key={e} value={e} />)}</UIGutter>
                </Row>
            </UITextView>

            <UITextView title='Weakness'>
                <Row>
                    <UIGutter>{weakness.map(e => <UITag key={e} value={e} />)}</UIGutter>
                </Row>
            </UITextView>

            <UITextView title='Abilities'>
                <Row>{abilities.map(e => <Text key={e}>{e}</Text>)}</Row>
            </UITextView>
            <TouchableWithoutFeedback onPress={onClose}>
                <ButtonStyled>
                    <FontAwesomeIcon icon={faTimes} size={20} />
                </ButtonStyled>
            </TouchableWithoutFeedback>

        </DetailView>)
}

export default Details;