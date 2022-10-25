import React from "react";
import './Tidings.css'


function Tidings (props) {
    return (
        <div>
            <div className="wrappertidings">
                <div className="boxtidings">
                    <div className="itemtidings">
                        <div className="usericon">
                        <i class="fa-solid fa-user">
                         {props.first_name}
                        </i>
                        </div>
                       
                    <div className="boxtidingstext">
                            {props.body}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tidings

