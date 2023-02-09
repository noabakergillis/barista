import '../App.css';
import barista_icon from '../barista_icon.svg' 
import * as React from 'react'
import CustomButton from '../components/button';
import { Link } from 'react-router-dom';
import dark_logo_transparent_background from '../dark_logo_transparent_background.png'

class Home extends React.Component{

    render(): React.ReactNode {
        return  <>
        <div>
            <img style={{width: "12%", padding: "15px", position: "absolute"}} src={dark_logo_transparent_background}/>
        </div>
        <div className='splash'>
            <div></div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <div className='button-wrapper'>
                    <CustomButton text={"Barista for business"}/>
                    </div>
                    <div className='button-wrapper'>
                        <Link to={"/studentSignup"}><CustomButton text={"Barista for students"}/></Link>
                    </div>
                </div>
    
          <div className="barista-img">
            <img src={barista_icon}  alt="barista"/>
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

export default Home;


