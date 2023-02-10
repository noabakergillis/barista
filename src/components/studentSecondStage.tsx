import '../App.css';
import React from "react";
import SkillCheck from './skillCheck';

interface Props{
    onNextButtonClicked: () => void
    onBackButtonClicked: () => void
  }

class StudentSecondStage extends React.Component<Props, {}>{

    constructor(props:Props){
        super(props)
    }

    render(): React.ReactNode {
        return <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
            <div className="contact-us">
              <form>
                <p style={{color: "rgba(0,0,0,1)"}}>What work are you interested in pursuing? Click all that apply</p>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <SkillCheck text={"Market research"}/>
                    <SkillCheck text={"Competitive benchmarking"}/>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                  <SkillCheck text={"Mystery shopping"}/>
                    <SkillCheck text={"Business translations"}/>
                </div>
                <div style={{display: "flex", justifyContent: "space-around", paddingTop: "25px"}}>
                    <button className='button' type="button" onClick={() => this.props.onBackButtonClicked()}>BACK</button>
                    <button className='button' type="button" onClick={() => this.props.onNextButtonClicked()}>NEXT</button>
                </div>
              </form>
            </div>
        </div>
      }
}

export default StudentSecondStage;


