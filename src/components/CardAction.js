import React from 'react';
import { Modal, View } from "react-native";

import UICard from './UIElements/UICard';
import Details from './Details';

const CardAction = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    const _handleTouch = () => setShowModal(true);
    const _handleCloseModal = () => setShowModal(false);

    return (
        <React.Fragment>
            <UICard {...props} onPress={_handleTouch} />
            <Modal
                transparent={true}
                visible={showModal}
            >
                <View style={{flex: 1, opacity: .95, backgroundColor: 'white'}}>
                    <Details {...props} onClose={_handleCloseModal}/>
                </View>
            </Modal>
        </React.Fragment>
    )
}

export default CardAction;