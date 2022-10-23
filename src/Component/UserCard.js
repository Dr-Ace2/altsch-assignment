import "../Component/Styles/UserCard.css";

const UserCard = () => {
    return(
        <div className="card">
            <p className="cardcontent">User Card</p>
            <p className="cardcontent">Name:</p>
            <p className="cardcontent">Username:</p>
            <p className="cardcontent">Email:</p>
            <p className="cardcontent">Gender:</p>
            <p className="cardcontent">Phone number:</p>
        </div>
    )
}

export default UserCard;