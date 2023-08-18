import React, {useState} from 'react'
import "./home.css"
import StudentsInput from '../../components/student-input'
import StudentsTable from '../../components/students-table'
import {STUDENT_TABLE} from "../../constant";
import ErrorModal from 'components/error-modal';
import { useNavigate } from "react-router-dom"
import Clipboard from '../../components/clipboard';

function Home() {
    const [data, setData] = useState(STUDENT_TABLE);
    const [edit, setEdit] = useState({})
    const [deleteIndex, setDeleteIndex] = useState(undefined)
    const navigate = useNavigate();
    const [toaster, setToaster] = useState('')

  const reset =()=>{
    localStorage.removeItem('LOGIN_DETAILS');
    navigate("/login")
  }

    const addData = (obj) =>{
        if(edit.index >-1){
           setEdit({})
           data.splice(edit.index, 1, obj)
           setToaster('successfully Editted')

        }else{
            data.unshift(obj)  
        }
        setData([...data])
    }
    const closeModal = ()=>{
        setDeleteIndex(undefined)
    }
    
    const delet =(index)=>{
        setDeleteIndex(index)
    }
    const deleteModal = ()=>{
        data.splice(deleteIndex, 1)
        setData([...data])
        setDeleteIndex(undefined)
        setToaster('successfully Deleted')
    }
    const editData =(index)=>{
        const obj = data[index];
        obj.index=index 
        setEdit(obj)
    }

    return (
            <div className="student-box">
                {!!toaster && <Clipboard text={toaster} handleClose={()=>setToaster('')}/>}
                {deleteIndex > -1 && <ErrorModal  handleClose={closeModal} handleDelete={deleteModal}/>}
                <div className="student-heading-button">
                <h1 className="heading">Student's Table</h1>
                <button className="button" onClick={reset}>Logout</button>
                </div>
                <StudentsInput handleData={addData} editData={edit} />
                <StudentsTable table={data} handleDelet={delet} handleEdit={editData}/>
            </div>
    )
}

export default Home
