import React, { useContext, useState } from 'react'
import { EmployeeContext } from './EmployeeContext';
import './Style.css';
import { v4 as uuidv4 } from 'uuid';


const AddEmployee = ({ handleClose }) => {

    const [employeeData, setEmployeeData] = useContext(EmployeeContext)

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [contact, setContact] = useState('');

    const [firstnameErr, setFirstNameErr] = useState({});
    const [lastnameErr, setLastNameErr] = useState({});
    const [designationErr, setDesignationErr] = useState({});
    const [contactErr, setContactErr] = useState({});


    const AddEmployeeMethod = (e) => {
        e.preventDefault();

        const isValid = formValidation();

        if (isValid) {
            setEmployeeData([...employeeData, {
                id: uuidv4(),
                firstname: firstname,
                lastname: lastname,
                designation: designation,
                contact: contact
            }]);

            handleClose();
        }
    }

    const formValidation = () => {
        const firstnameErr = {};
        const lastnameErr = {};
        const designationErr = {};
        const contactErr = {};

        let isValid = true;

        if (!firstname.trim()) {
            firstnameErr.ferror1 = "First Name is required.";
            isValid = false;
        }

        if (!lastname.trim()) {
            lastnameErr.lerror1 = "Last Name is required.";
            isValid = false;
        }

        if (!designation.trim()) {
            designationErr.derror1 = "Designation is required.";
            isValid = false;
        }


        const ContactCond = "^[0-9]{10}$";
        if (!contact.trim()) {
            contactErr.cerror1 = "Contact Number is required.";
            isValid = false;
        }
        else if (!contact.match(ContactCond)) {
            contactErr.cerror2 = "Please enter valid Contact Number";
            isValid = false;
        }

        setFirstNameErr(firstnameErr);
        setLastNameErr(lastnameErr);
        setDesignationErr(designationErr);
        setContactErr(contactErr);

        return isValid;
    }


    return (
        <div>
            <form>
                <div className='formElements'>
                    <div className='inputContainer'>
                        <label htmlFor='firstname'>First Name*</label><br />
                        <input
                            type="text"
                            name='firstname'
                            value={firstname}
                            placeholder='Enter First Name'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {
                            Object.keys(firstnameErr).map((key, index) => {
                                return <p key={index} style={{ color: "red" }}>{firstnameErr[key]}</p>
                            })
                        }
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='lastname'>Last Name*</label><br />
                        <input
                            type="text"
                            name='lastname'
                            value={lastname}
                            placeholder='Enter Last Name'
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {
                            Object.keys(lastnameErr).map((key, index) => {
                                return <p key={index} style={{ color: "red" }}>{lastnameErr[key]}</p>
                            })
                        }

                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='designation'>Designation*</label><br />
                        <input
                            type="text"
                            name='designation'
                            value={designation}
                            placeholder='Enter Designation'
                            onChange={(e) => setDesignation(e.target.value)}
                        />
                        {
                            Object.keys(designationErr).map((key, index) => {
                                return <p key={index} style={{ color: "red" }}>{designationErr[key]}</p>
                            })
                        }
                    </div>

                    <div className='inputContainer'>
                        <label htmlFor='contact'>Contact Number*</label><br />
                        <input
                            type="text"
                            name='contact'
                            value={contact}
                            placeholder='Enter Contact Number'
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {
                            Object.keys(contactErr).map((key, index) => {
                                return <p key={index} style={{ color: "red" }}>{contactErr[key]}</p>
                            })
                        }
                    </div>

                </div>

                <div className='formBtn'>
                    <input type='button' value="Cancel" className='Cancel-Btn' onClick={handleClose} />
                    <input type='button' value="Add" className='Add-Btn' onClick={AddEmployeeMethod} />
                </div>

            </form>

        </div>
    )
}

export default AddEmployee