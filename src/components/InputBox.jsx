
const InputBox = ({name, email , phonenumber , nameChangeHandler , phoneChangeHandler, emailChangeHandler ,submitform})=>{
    return (
        <div className="inputBox">
            {/* <form  onSubmit={submitform}> */}
                <input type="text" name="name" value={name} onChange={nameChangeHandler} className="inputBox__name"/>
                <input type="text" name="email" value={email} onChange={emailChangeHandler} className="inputBox__email"/>
                <input type="text" name="phone" value={phonenumber} onChange={phoneChangeHandler} className="inputBox__phone"/>
                <button onClick={submitform}>Add User</button>
            {/* </form> */}
        </div>
    )
}

export default InputBox;