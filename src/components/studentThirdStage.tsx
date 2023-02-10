import '../App.css';
import React from "react";


interface Props{
    onBackButtonClicked: () => void
}

class StudentThirdStage extends React.Component<Props, {}>{

    constructor(props: Props){
        super(props)
    }

    render(): React.ReactNode {
        return <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
            <div className="contact-us">
              <form>
                <input className='input' placeholder="Name" type="text" />
                <input className='input' name="customerEmail" placeholder="School email" type="email" />
                <input className='input' name="customerSchool" placeholder="Phone number" type="email" />                
                <div style={{display: "flex", justifyContent: "center", paddingTop: "25px"}}>
                    <button className='button' type="button" onClick={() => this.props.onBackButtonClicked()}>BACK</button>
                    <button className='button' type="button" onClick={() => {
                      alert("Thanks for signing up with Barista! You will receive an email when your account has been verified")
                    }}>GET VERIFIED</button>
                </div>
              </form>
            </div>
        </div>
      }
}

export default StudentThirdStage;


