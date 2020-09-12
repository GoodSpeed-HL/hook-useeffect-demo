import React, {useState} from 'react';
import {Modal, Button} from "react-bootstrap";

function MyTest (props){

    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onChange = (e) =>{
        setValue(value);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><input defaultValue={value} onInput={onChange} /> </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MyTest;