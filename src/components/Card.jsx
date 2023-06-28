const Card = ({key ,name , email , phone}) => {
    return (
        <div className="card" key={key}>
            <h2 className="card__text w-full text-lg">{name}</h2>
            <hr className="w-100 opacity-90"/>
            <p className="card__text w-[50%]">{email}</p>
            <p className="card__text w-[50%] text-right">{phone}</p>
        </div>
    )
}

export default Card;