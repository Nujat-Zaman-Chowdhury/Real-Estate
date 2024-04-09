import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
   

    //create user
    const createUser = (email,password)=>{
      return  createUserWithEmailAndPassword(auth, email, password);
    }

    //signin user

    const signInUser = (email,password)=>{
       
       return signInWithEmailAndPassword(auth,email,password)
    }

    //googlelogin
    const googleLogin = ()=>{

      return signInWithPopup(auth, googleProvider)
    }

    //githublogin

    const githubLogin = ()=>{
      
      return signInWithPopup(auth,githubProvider)
    }

    //sign out
    const logOut = ()=>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser)
        } else {
          setUser(null)
        }
      });
      return ()=>{
        unSubscribe();
      }
    },[])
    

   

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;