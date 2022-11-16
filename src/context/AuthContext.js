import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { db } from '../../firebase';
import { set, ref, update, onValue, get } from "firebase/database";


function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory()


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }

  }


  const handleSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        history.push("/platform")
      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <>

    </>

  )

}

export default Login

function Signup() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const history = useHistory()


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

  }


  const saveData = (user) => {
    set(ref(db, 'users/' + user?.uid), {
      userName: firstName,
      userEmail: email,
      amount: 0
    })
      .then(() => (
        history.push("/login")
        // console.log("Data saved successfully")
      ))
      .catch(error => console.log(error))
  }

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        saveData(user)
      })
      .catch((error) => {
        console.log(error)
      });

  }

  return (
    <></>)
}

function updateUserAmount(id, amount) {
  update(ref(db, 'users/' + id), {
    amount: amount,
  }).then(() => {
    if (this.currentUser?.uid === id) {
      this.toast.show('New balance is Ksh ' + amount,
        {
          duration: 3000,
        });
    }
  }).catch((error) => {
    this.toast.show(error, { duration: 5000 })
  });
}

function updateUserBalance() {
  const amountRef = ref(db, 'users/' + this.currentUserUid + '/amount');
  onValue(amountRef, (snapshot) => {
    const data = snapshot.val();
    this.balance = data;
  });
}

async function reauthenticateUser(password) {
  let authenticated = false;
  if (this.currentUser) {
    const credential = EmailAuthProvider.credential(
      this.currentUser?.email === null ? '' : this.currentUser.email,
      password
    );
    await reauthenticateWithCredential(this.currentUser, credential).then(() => {
      // User re-authenticated.
      authenticated = true;
    }).catch((error) => {
      this.toast.show('incorect password!!' + error, { duration: 5000 })
    });
  }

  return authenticated;
}

async function getUser(id) {
  const snapshot = await get(ref(db, 'users/' + id));
  this.user = snapshot.val();
  return this.user;
}

function logout() {
  const auth = getAuth();
  return (auth.signOut());
}




