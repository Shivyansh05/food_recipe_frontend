import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context'
import { Link, useNavigate } from 'react-router-dom';
const Profile = () => {
  const { user, userRecipe,deleterecipe } = useContext(AppContext);
  const navigate= useNavigate();
  const handledelete = async(id)=>{
   const del = await deleterecipe(id);
   
  }
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome {user.name}</h1>
      </div>
      <div className="container">
        <div className=" text-center mx-auto" style={{ width: "1200px" }}>
          <div className="row d-flex justify-content-center align-items-center">
            {userRecipe?.map((data) => (
              <div key={data._id} className="col-md-3 my-3">
                  <div className="d-flex justify-content-center align-items-center p-3">
                    <img
                      src={data.imgurl}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                        border: "2px solid yellow",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title name ">{data.title}</h5>
                  </div>
               <button className='btn btn-danger bt' onClick={()=>{handledelete(data._id)}}>delete</button>
               
               <button className='btn btn-success bt' onClick={()=>navigate(`/edit/${data._id}`)}  >Edit</button>
              </div>
            ))}
          </div>
          <Link to={'/add'} className='btn btn-primary myadd'>ADD MORE RECIPIES</Link>
        </div>
      </div>
    </>
  );
}

export default Profile
