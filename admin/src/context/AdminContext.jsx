
// import { createContext, useState, useEffect } from "react";
// import axios from 'axios'
// import {toast} from 'react-toastify'

// export const AdminContext = createContext();

// const AdminContextProvider = (props) => {
//   const [aToken, setAToken] = useState('');

// const[doctors,setDoctors] = useState([])

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const getAllDoctors = async () => {


//     try {

//      const{data} = await axios.post(backendUrl + '/api/admin/all-doctors' ,{}, {headers:{aToken}})
//      if (data.success) {
//       setDoctors(data.doctors)
//       console.log(data.doctors);
      
      
//      } else{
//       toast.error(data.message)
//      }
      
//     } catch (error) {
//       toast.error(error.message)
      
//     }

//   }
//   useEffect(() => {
//     // Sync with localStorage on mount
//     const token = localStorage.getItem('aToken');
//     if (token) {
//       setAToken(token);
//     }
//   }, []);

//   const value = {
//     aToken,
//     setAToken,
//     backendUrl,doctors,
//     getAllDoctors
//   };

//   return (
//     <AdminContext.Provider value={value}>
//       {props.children}
//     </AdminContext.Provider>
//   );
// };

// export default AdminContextProvider;



import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState('');
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/admin/all-doctors',
        {},
        {
          headers: {
            Authorization: `Bearer ${aToken}` // ✅ Corrected token header
          }
        }
      );

      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('aToken');
    if (token) {
      console.log("Token from localStorage:", token);
      setAToken(token); // ✅ Set token to state
    }
  }, []);
  
  useEffect(() => {
    if (aToken) {
      getAllDoctors(); // ✅ Fetch doctors only after token is set
    }
  }, [aToken]);
  
  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
