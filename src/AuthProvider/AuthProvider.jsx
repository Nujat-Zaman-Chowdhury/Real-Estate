import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(user);

    //create user
    const createUser = (email,password)=>{
      setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password);
    }

    //updateProfile
    const updateUserProfile = (name,photo)=>{
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

    //signin user

    const signInUser = (email,password)=>{
       setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    //googlelogin
    const googleLogin = ()=>{

      return signInWithPopup(auth, googleProvider)
    }

    //githublogin

    const githubLogin = ()=>{
      setLoading(true)
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
          setLoading(false)
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
        logOut,
        updateUserProfile,
        loading
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;