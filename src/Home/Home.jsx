import { Link, useNavigate } from "react-router-dom"
import "./Home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../store/slices/userSlice"

export default function Home() {
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const handleDelete=(id)=>{
      dispatch(deleteUser(id))
    }    
  return (
    <div className='container'>
        <h2>CRUD App With Redux</h2>
        <Link to="/create" className="btn btn-success my-3">
        <button style={{color:'white'}}>Create +</button>
        </Link>
      <table className='table table-borderd'>
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {users.map((user,index)=>{
            return(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td style={{display:"flex" , justifyContent:"space-around", alignContent:"center"}}>
                <Link to={`/edit/${user.id}`} className="btn btn-primary" style={{textDecoration:'none'}}>
                <button>EDit</button>
                </Link>
                <button className='btn btn-danger btn-sm  ms-2' onClick={()=>handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
