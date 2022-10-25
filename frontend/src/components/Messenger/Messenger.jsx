import React from "react";
import './Messenger.css'
import Tidings from "../Tidings/Tidings";
import Add from "../Add/Add";
import axios from '../../axios'
import UserList from "../UserList/UserList";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Messenger extends React.Component {
    constructor (props)   {
        super (props)
        this.state =  {
           chat: [
            {
                id:0, 
                first_name: 'Tomek', 
                body: 'Cześć jak tam?'
            },
            {
                id: 1,
                first_name: 'Ola',
                body: 'Cześć, byłam w Gdańsku'
            },
            {
                id: 2,
                first_name: 'Filip',
                body: 'Ja byłem we Włoszech'
            },
            {
                id: 3,
                first_name: 'Tomek',
                body: 'O super! Wypoczęci? '
            },
            {
                id: 4,
                first_name: 'Ola',
                body: 'Tak!😎'
            }
        ]}
       
    }
    
    componentDidMount () {
        this.fetchAllUsers()
        this.deleteMessenger()
    }

        async fetchAllUsers () {
            const res = await axios.get('/users')
            const chat = res.data

            this.setState({chat})
        }




    async deleteMessenger (id) {
      
        const chat = [...this.state.chat].filter(del => del._id === id)
        await axios.delete('/users' + id)

        this.setState ({chat})    
        
    }    

    deleteNoDatabase (id) {
        const chat = [...this.state.chat].filter(us=> us.id !== id)

        this.setState ({chat})

    }

      async addMessage (msg){
        const chat = [...this.state.chat]

        try {
        const res = await axios.post('/users', msg)
        const newMsg = res.data;

        chat.push(newMsg)
        this.setState({chat})

        } catch (err) {
            NotificationManager.error('You must complete all fields')
            
        }  
    }

    render () {


    return (
        <div>
            <NotificationContainer />
             <div className="wrapperchat">
                    <div className="boxchat">
                        <div className="chat">
                            <div className="chatheader">
                                <div className="iconmessage">
                                    <i class="fa-regular fa-comment"></i>
                                    <div className="iconmessagetext">Messaging</div>
                                </div>
                            </div>
                            <div className="chatbody">
                            {this.state.chat.map (el => (
                                <Tidings 
                                 key={el._id} 
                                 first_name={el.first_name}
                                 body={el.body}
                                 id= {el._id}
                                />
                                ))}
                            </div>
                          <Add 
                          onAdd = {
                            (msg) => this.addMessage(msg)
                          }
                          
                          />
                        </div>

                        <div className="chat">
                            <div className="chatheader">
                                <div className="iconmessage">
                                <i class="fa-solid fa-chalkboard-user"></i>
                                    <div className="iconmessagetext">List of people in chat</div>
                                </div>
                            </div>
                            <div className="chatbodyuser">
                            {this.state.chat.map (el => (
                                <UserList 
                                 key={el._id} 
                                 first_name={el.first_name}
                                 body={el.body}
                                 id= {el._id}
                                //  id= {el.id}
                                 onDelete={
                                    (id) => this.deleteMessenger(id)
                                  }
                                />
                                ))}
                            </div>
                          
                          
                        </div>
                    </div>
                </div>
        </div>
    )
}
}

export default Messenger