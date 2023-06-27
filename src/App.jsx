import { useState } from 'react'
import InputBox from './components/InputBox';
import List from './components/Lsit';

function App() {
  const [Users , setUsers] = useState([]);
  const [Name , setName] = useState("");
  const [Phone , setPhone] = useState("");
  const [Email , setEmail] = useState("");

  const nameChangeHandler = (event)=> {
    setName(event.target.value);
  }
  const emailChangeHandler = (event)=> {
    setEmail(event.target.value);
  }  
  const phoneChangeHandler = (event)=> {
    setPhone(event.target.value);
  }
  const submitform = () => {
    setUsers([...Users , {id : Users.length + 1 , name : Name , email : Email , phone : Phone}])
  }
  return (
    <section className='container'>
      <InputBox 
        name={Name} 
        email = {Email} 
        phonenumber = {Phone}
        nameChangeHandler = {nameChangeHandler}
        phoneChangeHandler = {phoneChangeHandler}
        emailChangeHandler = {emailChangeHandler}
        submitform = {submitform}
        />
      <List users={Users}/>
    </section>
  )
}

export default App
