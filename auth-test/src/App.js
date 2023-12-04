import {React, useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import './App.css';
import {auth} from './firebase-config'

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword,setLoginPassword] = useState("");

  const [user, setUser] = useState({})
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // This is the cleanup function to unsubscribe when the component unmounts.
  }, []);

  const register = async () => {
    try { 
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user)
    }
    catch (error) { 
      console.log(error.message);
    }
  }
  
  const login = async () => { 
   try { 
    const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword)
    console.log(user)
    }
    catch (error) { 
      console.log(error.message);
    }
  }
  
  
  const logout = async () => { 
    await signOut(auth)
  }

  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input placeholder="Email.." onChange={(event) => {setRegisterEmail(event.target.value)}}></input>
        <input placeholder="Password..." onChange={(event) => {setRegisterPassword(event.target.value)}}/>
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login User</h3>
        <input placeholder="Email.." onChange={(event) => {setLoginEmail(event.target.val)}}></input>
        <input placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value)}}/>
        <button onClick={login}>Login</button>
      </div>
      <h4> User Logged in</h4>
      {user?.email}
      <button onClick={logout}> Sign out</button>
    </div>
  );
  }

export default App;
