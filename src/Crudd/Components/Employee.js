import { useContext, useState } from 'react';
import './Style.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { EmployeeContext } from './EmployeeContext';
import { Modal } from 'react-bootstrap';
import EditEmployee from './EditEmployee';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontWeight: 600,
        padding: '10px ',
    },

    [`&.${tableCellClasses.body}`]: {
        padding: '10px',
    },
}));


const Employee = () => {

    const [employeeData, setEmployeeData] = useContext(EmployeeContext)
    const [ID, setID] = useState('')

    const [show, setShow] = useState(false)

    const handleShow = (id) => {
        setShow(true)
        setID(id);
    }
    const handleClose = () => setShow(false)


    const deleteEmployee = (ID) => {
        setEmployeeData(
            employeeData.filter((data) => data.id !== ID)
        )
    }


    return (
        <div className='employeeDataContainer'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>FIRST NAME</StyledTableCell>
                            <StyledTableCell align="left">LAST NAME</StyledTableCell>
                            <StyledTableCell align="left">DESIGNATION</StyledTableCell>
                            <StyledTableCell align="left">CONTACT NUMBER</StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {employeeData.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.firstname}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                                <StyledTableCell align="left">{row.designation}</StyledTableCell>
                                <StyledTableCell align="left">{row.contact}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <button className='editBtn' onClick={() => handleShow(row.id)}>Edit</button>
                                    <button className='removeBtn' onClick={() => deleteEmployee(row.id)}>Remove</button>
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal show={show} onHide={handleClose} className='modalContainer'>
                <Modal.Header className='modalHeader' closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='modalBody'>
                    <EditEmployee handleClose={handleClose} ID={ID} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Employee