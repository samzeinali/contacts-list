import Card from "./Card";

const List = ({users})=> {
    return (
        <div className="listBox">
            <div className="listBox__list">
                {users.map(
                    ({id , name , email , phone}) => {
                        return (
                            <Card 
                                key= {id}
                                name = {name}
                                email = {email}
                                phone = {phone}
                            />
                        )
                    }
                )
                }
            </div>
        </div>
    )
}

export default List;