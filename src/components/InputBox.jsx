
const InputBox = ({name, email , phonenumber , nameChangeHandler , phoneChangeHandler ,emailChangeHandler ,submitform, searchHandler, searchTerm})=>{
    return (
        <div className="w-full">
            <div className="w-full boxcenter-c px-4">
                <form  onSubmit={submitform} className="w-full items-center justify-center flex flex-wrap md:justify-between">
                    <input type="text" name="name" value={name} onChange={nameChangeHandler} className="input" placeholder="please enter full Name ..."/>
                    <input type="text" name="email" value={email} onChange={emailChangeHandler} className="input"placeholder="please enter Email ..."/>
                    <input type="text" name="phone" value={phonenumber} onChange={phoneChangeHandler} className="input"placeholder="please enter PhoneNumber ..."/>
                    <input type="text" name="search" value={searchTerm} onChange={searchHandler} className="input"placeholder="Search ..."/>
                    <button onClick={submitform} className="custom-button">Add User</button>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default InputBox;