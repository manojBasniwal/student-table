import React, {useEffect, useState} from 'react'
import "./students-input.css"
import {CLASSES} from "../../constant";

function StudentsInput({handleData, editData}) {
    const [name, setName] = useState('')
    const [fName, setFName] = useState('')
    const [classNo, setClassNo] = useState('')
    const [mobilNo, setMobilNo] = useState('')
    const [age, setAge] = useState('')


    useEffect(()=>{
        if(!!editData.name){
            setName(editData.name)
        }
        if(!!editData.fName){
            setFName(editData.fName)
        }
        if(!!editData.classNo){
            setClassNo(editData.classNo)
        }
        if(!!editData.mobilNo){
            setMobilNo(editData.mobilNo)
        }
        if(!!editData.age){
            setAge(editData.age)
        }
    }, [editData])

const handleSubmit = (event)=>{
   event.preventDefault();
    handleData({ name: name, fName:fName,classNo:classNo, mobilNo:mobilNo, age:age})
    setName('')
    setFName('')
    setClassNo('')
    setMobilNo('')
    setAge('')
}
    return (
        <form onSubmit={handleSubmit}>
            <div className="student-input">
                <div className="form-group">
                    <input type="text" className="input" placeholder="Name"  onChange={(e) => setName(e.target.value)} value={name} required />
                </div>
                <div className="form-group">
                    <input type="text" className="input" placeholder="Father Name" onChange={(e) => setFName(e.target.value)} value={fName}  required/>
                </div>
                <div className="form-group">
                    <select className="input" placeholder="Class" onChange={(e)=> setClassNo(e.target.value)} value={classNo} required>
                       {CLASSES.map((value)=> (<option key={value} value={value}>{value}</option>))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="tel" className="input" placeholder="Mobil No:" pattern="[6-9]{1}[0-9]{9}" onChange={(e) => setMobilNo(e.target.value)} value={mobilNo} required />
                </div>
                <div className="form-group">
                    <input type="number" className="input" name="age" placeholder="Age" min="5" max="20" onChange={(e) => setAge(e.target.value)} value={age}  required />
                </div>
            </div>
            <button type="submit" className="button" >Submit</button>
        </form>
    )
}

export default StudentsInput
