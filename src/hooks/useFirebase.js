import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Page/Login/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase= ()=>{
    const[user,setUser]=useState({})
    const [name,setName]=useState('')
    const [isLoading, setIsLoading] = useState(true);
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    
    const auth = getAuth();

const signInUsingGoogle= ()=> {
  setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth,googleProvider)
    .then(result=>{
       setUser(result.user)
    })
    .catch(error=>{
      setError("popup-closed you");
    })
    .finally(() => setIsLoading(false));
}

const handalRegistration = ()=> {
  createUserWithEmailAndPassword (auth,email,password)
.then(result=>{
  setUser(result.user)
  setUsername();
 window.location.reload();
  
})
.catch(error=>{
  setError(error.message);
})
}
const handaleSignIn = ()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then(result=> {
    setUser(result.user)
  })
  .catch((error) =>{
    setError(error.message);
  })
}
const setUsername =() => {
  updateProfile(auth.currentUser, {displayName:name})
  .then(result=>{})
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
        handalRegistration,
        handaleSignIn,
        setName,
        error
       

        
    }
}

export default useFirebase;