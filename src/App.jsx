import { useState , useEffect} from 'react'
import InputBox from './components/InputBox';
import List from './components/Lsit';
import "./index.css"

function App() {
  const [Users , setUsers] = useState([]);
  const [Name , setName] = useState("");
  const [Phone , setPhone] = useState("");
  const [Email , setEmail] = useState("");
  const [SearchTerm , setSearchTerm] = useState("")

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
     setUsers(contacts)
    }
  }, []);
  const nameChangeHandler = (event)=> {
    setName(event.target.value);
  }
  const emailChangeHandler = (event)=> {
    setEmail(event.target.value);
  }  
  const phoneChangeHandler = (event)=> {
    setPhone(event.target.value);
  }
  const submitform = (event) => {
    event.preventDefault();
    setUsers([...Users , {id : Users.length + 1 , name : Name , email : Email , phone : Phone}]);
    setEmail("");
    setName("");
    setPhone("");
    localStorage.setItem("contacts" , JSON.stringify(Users))
  }
  const searchHandler = (event)=> {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  return (
    <section className='w-full flex items-center flex-col'>
      <h1 className='w-full flex justify-center items-center text-2xl p-4'>contacts List</h1>
      <InputBox 
        name={Name} 
        email = {Email} 
        phonenumber = {Phone}
        nameChangeHandler = {nameChangeHandler}
        phoneChangeHandler = {phoneChangeHandler}
        emailChangeHandler = {emailChangeHandler}
        submitform = {submitform}
        searchHandler = {searchHandler}
        searchTerm = {SearchTerm}
        />
      <List users={Users} searchTerm={SearchTerm}/>
    </section>
  )
}

export default App
