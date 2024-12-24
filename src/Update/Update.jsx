import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../store/slices/userSlice';

export default function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users)
    // const user=users.find((u)=>u.id===parseInt(id))
    // f => f.id == id
    const existingUser = users.filter(user=>user.id==id);
    console.log(existingUser[0])
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const handelChange = (e) => {
        e.preventDefault();
        dispatch(updateUser(
            {
                id:id,
                name: uname,
                email: uemail
            }
        ))
        navigate('/')
    }
    return (
        <div className='container'>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <h3>Update USER</h3>
                    <form onSubmit={handelChange}>
                        <div>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' name='name' className='form-control' 
                            value={uname} required onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' className='form-control' 
                            value={uemail} required onChange={e=>setEmail(e.target.value)}/>
                        </div><br />
                        <button className='btn btn-info'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

