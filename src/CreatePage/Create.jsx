import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // console.log(users)

    const handleSubmit=(event)=>{
        event.preventDefault();
        let newuser={id:users.length+ 1,name,email}
        dispatch(adduser(newuser))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>ADD NEW USER</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' required onKeyUp={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' required onKeyUp={e=>setEmail(e.target.value)}/>
            </div><br/>
            <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}
