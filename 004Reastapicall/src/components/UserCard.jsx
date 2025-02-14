import React from "react";
const UserCard = (props) => {
    console.log(props.data);

    return(
        <div className="user-card">
           <table className="user-table">
            <tr>
                <td></td>
                <td><img src={props.data.picture.large} alt="user" /></td>
            </tr>
            <tr>
                <td>First Name :</td>
                <td>{props.data.name.first}</td>
            </tr>
            <tr>
                <td>Last Name :</td>
                <td>{props.data.name.last}</td>
            </tr>
            <tr>
                <td>Email :</td>
                <td>{props.data.email}</td>
            </tr>
            <tr>
                <td>Phone :</td>
                <td>{props.data.phone}</td>
            </tr>
            <tr>
                <td>City :</td>
                <td>{props.data.location.city}</td>
            </tr>
            </table> 
            
        </div>
    )
}
export default UserCard;