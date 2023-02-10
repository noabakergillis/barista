import '../App.css';
import React from "react";
import SkillCheck from './skillCheck';

interface Props{
  onButtonClicked: () => void
}

class StudentFirstStage extends React.Component<Props, {}>{

  constructor(props:Props){
    super(props);
  }

    render(): React.ReactNode {
        return <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
            <div className="contact-us">
              <form>
                <input className='input' placeholder="University name" type="text" />
                <input className='input' name="customerEmail" placeholder="University major" type="email" />
                <p style={{color: "rgba(0,0,0,1)"}}>Are you a:</p>
              </form>
              <div style={{display: "flex", paddingBottom: "25px"}}>
                  <SkillCheck text={"Freshman"}/>
                  <SkillCheck text={"Sophomore"}/>
                  <SkillCheck text={"Junior"}/>
                  <SkillCheck text={"Senior"}/>
                </div>               
                <button className='button' type="button" onClick={() => this.props.onButtonClicked()}>NEXT</button>
            </div>
        </div>
      }
}

export default StudentFirstStage;


