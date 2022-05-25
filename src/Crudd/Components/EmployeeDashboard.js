import React, { useState } from 'react'
import Employee from './Employee'
import './Style.css'
import { Modal } from 'react-bootstrap';
import AddEmployee from './AddEmployee';


const EmployeeDashboard = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <div className='dashboardContainer'>
            <div className='headerContainer'>
                <p>Employee Information</p>
                <button onClick={handleShow}>Add</button>
            </div>

            <Employee />


            <Modal show={show} onHide={handleClose} className='modalContainer'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body  className='modalBody'>
                    <AddEmployee handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EmployeeDashboard