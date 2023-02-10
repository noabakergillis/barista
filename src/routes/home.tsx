import '../App.css';
import blue_student from '../blue_student.png' 
import * as React from 'react'
import CustomButtonLarge from '../components/customButtonLarge';
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
                  <Link to={"/baristaForBusiness"}>
                    <CustomButtonLarge text={"Barista for employers"}/>
                  </Link>  
                    </div>
                    <div className='button-wrapper'>
                        <Link to={"/studentSignup"}><CustomButtonLarge text={"Barista for students"}/></Link>
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

export default Home;


