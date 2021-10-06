import { Fragment } from 'react';
import reactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.Backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const Modal = (props) => {
    const portalElement = document.getElementById('overlays');
    return (<Fragment>
        {reactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {reactDom.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
    );
};

export default Modal;