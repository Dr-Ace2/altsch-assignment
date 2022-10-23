import UserCard from "./UserCard";

const style ={
    color:"yellow",
}
const Users = () => {
    return(
        <div>
            <h1 style={style}>Users Page</h1>
            <UserCard/>
            
        </div>
    )
}

export default Users;