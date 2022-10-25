import { useState } from 'react';
import './Add.css'

function Add (props) {

    const [first_name, setfirst_name] = useState('')
    const [body, setbody] = useState('')

    const changeUser = (event) => {
        const value = event.target.value
        setfirst_name(value)
    }

    const changeBody = (event) => {
        const value = event.target.value
        setbody(value)
    }

    const addAllItems = () => {
        const item = {
           first_name: first_name,
           body: body 
        }
        props.onAdd(item)
        setfirst_name('')
        setbody('')
    }

   
    const enterKey = (e) => {
        if (e.key === "Enter") {
            addAllItems()
        }
    }


    return (
        <div>
  <div className="chatsend">
                                <div className="deletemessage">
                                    <i class="fa-solid fa-repeat"></i>
                                </div>
                                <div className="usersand">
                                    <input placeholder="User" 
                                    value={first_name} 
                                    onChange={changeUser}/>
                                </div>
                                <div className="messanger">
                                    <input placeholder="Write your message..." 
                                    value={body}
                                    onChange={changeBody}
                                    onKeyDown={enterKey}
                                    />     
                                </div>
                                <div className="iconsend"
                                onClick={() => addAllItems()}>
                                    <i class="fa-solid fa-paper-plane"></i>
                                </div>
                            </div>
        </div>

    )
}

export default Add;