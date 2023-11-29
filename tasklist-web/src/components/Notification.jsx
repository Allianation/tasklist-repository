import React from 'react';
import { DivSuccess, DivError } from './NotificationStyles';

const Notification = ({ type, message }) => {
    if (message === null) {
        return null;
    }
    
    if (type === 'success') {
        return <DivSuccess>{message}</DivSuccess>;
    }
    
    if (type === 'error') {
        return <DivError>{message}</DivError>;
    }
}

export default Notification;