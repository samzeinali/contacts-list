import Card from "./Card";

const List = ({users, searchTerm})=> {
    return (
        <div className="w-full boxcenter-c">
            <div className="w-full px-4 boxcenter-c md:flex-row md:justify-between xl:justify-stretch">
                {users
                .filter(({name})=> name.includes(searchTerm))
                .map(
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