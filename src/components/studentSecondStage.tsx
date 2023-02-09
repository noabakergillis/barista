import '../App.css';
import React from "react";

class StudentSecondStage extends React.Component{

    render(): React.ReactNode {
        return <div style={{display: "flex", justifyContent: "center", paddingTop: "50px"}}>
            <div className="contact-us">
              <form>
                <input className='input' placeholder="Name" type="text" />
                <input className='input' name="customerEmail" placeholder="Email" type="email" />
                <input className='input' name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" type="tel" />
                <button className='button' type="button">SIGN UP</button>
              </form>
            </div>
        </div>
      }
}

export default StudentSecondStage;


