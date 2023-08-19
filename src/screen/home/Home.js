import React, {useState} from 'react'
import "./home.css"
import StudentsInput from '../../components/student-input'
import StudentsTable from '../../components/students-table'
import {STUDENT_TABLE} from "../../constant";
import ErrorModal from 'components/error-modal';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [data, setData] = useState(STUDENT_TABLE);
    const [edit, setEdit] = useState({})
    const [deleteIndex, setDeleteIndex] = useState(undefined)
    const navigate = useNavigate();

  const reset =()=>{
    localStorage.removeItem('LOGIN_DETAILS');
    navigate("/login")
  }

    const addData = (obj) =>{
        if(edit.index >-1){
           setEdit({})
           data.splice(edit.index, 1, obj)
           toast.success('successfully Editted')

        }else{
            data.unshift(obj) 
            toast.success('successfully submit') 
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
        toast.success('successfully Deleted')
    }
    const editData =(index)=>{
        const obj = data[index];
        obj.index=index 
        setEdit(obj)
    }

    return (
            <div className="student-box">
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
