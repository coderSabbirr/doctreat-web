import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Page/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase= ()=>{
    const[user,setUser]=useState({})
    const [isLoading, setIsLoading] = useState(true);
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const auth = getAuth();

const signInUsingGoogle= ()=> {
  setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user)
    })
    .catch(error=>{
      console.log(error.message);
    })
    .finally(() => setIsLoading(false));
}

const handalaRegister= ()=> {
  createUserWithEmailAndPassword (auth,email,password)
.then(result=>{
  const user =result.user;
  setUser(user);
})
.catch(error=>{
  console.log(error.message);
})
}
const handaleSignIn = ()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then(result=> {
   console.log(user);
  })
  .catch((error) =>{
    console.log(error.message);
  })
}
useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    setUser(user);
    
  } else {
    setUser({})
  }
  setIsLoading(false)
});
},[])


const logOut =()=>{
  setIsLoading(true);
    signOut(auth)
    .then(()=>{ })
    .finally(()=>setIsLoading(false));
    
}


    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setEmail,
        setPassword,
        handalaRegister,
        handaleSignIn,
       

        
    }
}

export default useFirebase;