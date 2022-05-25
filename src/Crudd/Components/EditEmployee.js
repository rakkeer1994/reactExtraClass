import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from './EmployeeContext';
import './Style.css';


const EditEmployee = ({ handleClose, ID }) => {

    const [employeeData, setEmployeeData] = useContext(EmployeeContext)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        employeeData.forEach(data => {
            if (data.id === ID) {
                setFirstName(data.firstname);
                setLastName(data.lastname);
                setDesignation(data.designation);
                setContact(data.contact)
            }
        })
    }, [ID, employeeData])


    const EditEmployeeMethod = (e) => {
        e.preventDefault();

        if (firstName && lastName && designation && contact) {

            setEmployeeData((previousV) => previousV.map((data) => data.id === ID ? {
                id: ID,
                firstname: firstName,
                lastname: lastName,
                designation: designation,
                contact: contact
            } : data));
        }

        handleClose();
    }

    return (
        <div>
            <form>
                <div className='formElements'>
                    <p>
                        <label htmlFor='firstName'>First Name*</label><br />
                        <input
                            type="text"
                            name='firstName'
                            value={firstName}
                            placeholder='Enter First Name'
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor='lastName'>Last Name*</label><br />
                        <input
                            type="text"
                            name='lastName'
                            value={lastName}
                            placeholder='Enter Last Name'
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor='designation'>Designation*</label><br />
                        <input
                            type="text"
                            name='designation'
                            value={designation}
                            placeholder='Enter Designation'
                            onChange={(e) => setDesignation(e.target.value)}
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor='contact'>Contact Number*</label><br />
                        <input
                            type="text"
                            name='contact'
                            value={contact}
                            placeholder='Enter Contact Number'
                            onChange={(e) => setContact(e.target.value)}
                            required
                        />
                    </p>

                </div>

                <div className='formBtn'>
                    <input type='button' value="Cancel" className='Cancel-Btn' onClick={handleClose} />
                    <input type='button' value="Update" className='Add-Btn' onClick={EditEmployeeMethod} />
                </div>

            </form>

        </div>
    )
}

export default EditEmployee