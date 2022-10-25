import React from "react"
import './UserList.css'

function UserList (props) {

    return (
      
        <div className="boxuserdelete">
        <div className="boxuserlist">
                <div className="textuser">{props.first_name}</div>
        </div>
        <div className="boxbin">
            <i class="fa-solid fa-trash-can" onClick={() => props.onDelete(props.id)}></i>
        </div>
        </div>
    )
}

export default UserList