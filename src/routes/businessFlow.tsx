import '../App.css';
import blue_student from '../blue_student.png' 
import * as React from 'react'
import dark_logo_transparent_background from '../dark_logo_transparent_background.png'
import SkillCheck from '../components/skillCheck';
import { Link } from 'react-router-dom';

class BusinessFlow extends React.Component{

    render(): React.ReactNode {
        return  <>
        <Link to="/">
        <div>
            <img style={{width: "12%", padding: "15px", position: "absolute"}} src={dark_logo_transparent_background}/>
        </div>
        </Link>
        <div className='splash'>
            <div></div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <p style={{color: "rgba(0,0,0,1)"}}>What work are you interested in pursuing? Click all that apply</p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{padding: "15px", paddingLeft: "0px"}}>
                    <SkillCheck text={"Market research"}/>
                    </div>
                    <div style={{padding: "15px", paddingLeft: "0px"}}>
                    <SkillCheck text={"Competitive benchmarking"}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start"}}>
                    <div style={{padding: "15px", paddingLeft: "0px"}}>
                    <SkillCheck text={"Mystery shopping"}/>
                    </div>
                    <div style={{padding: "15px", paddingLeft: "0px"}}>
                    <SkillCheck text={"Business translations"}/>
                    </div>
                </div>
                <div style={{paddingTop: "20px"}}>
                    <button className='button-signup' type="button">FIND YOUR STUDENT</button>
                </div>
            </div>
    
          <div className="barista-img">
            <img style={{width: "100%"}} src={blue_student}  alt="barista"/>
          </div>
        </div>
        <div className='inner-footer'>
          <div className='footer'>
            <div className='footer-content'>Trusted By:</div>
            <div className='footer-content'>University of Pennsylvania</div>
            <div className='footer-content'>The Wharton School</div>
          </div>
    
        </div>
        </>
      }
}

export default BusinessFlow;


