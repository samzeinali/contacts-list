const Card = ({key ,name , email , phone}) => {
    return (
        <div className="card" key={key}>
            <p className="card__name">{name}</p>
            <p className="card__email">{email}</p>
            <p className="card__phone">{phone}</p>
        </div>
    )
}

export default Card;