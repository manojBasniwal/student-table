import React from 'react';
import "./students-table.css";

function StudentsTable({table, handleDelet, handleEdit}) {

    const handleClick =(ind)=>{
        handleDelet(ind)
    }
    const handleChange =(ind)=>{
        handleEdit(ind)
    }
    return (
        <div className="student-table-section">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>FatherName</th>
                    <th>Class</th>
                    <th>Mobil No:</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {table.map((item, index)=>(<tr key={index}>
                    <td>{item?.name}</td>
                    <td>{item?.fName}</td>
                    <td>{item?.classNo}</td>
                    <td>{item?.mobilNo}</td>
                    <td>{item?.age}</td>
                    <td><button className="button1" onClick={() =>handleClick(index)}>Delete</button>
                    <button className=" button1 button2" onClick={() =>handleChange(index)}>Edit</button>
                    </td>
                </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable
