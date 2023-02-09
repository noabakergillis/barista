import '../App.css';
import * as React from 'react'
import StudentFirstStage from '../components/studentFirstStage';
import dark_logo_transparent_background from '../dark_logo_transparent_background.png'
import { Link } from 'react-router-dom';

interface State {
  stage: number
}

class StudentSignup extends React.Component<{}, State>{


  constructor(props: {}){
    super(props)
    this.state = {stage: 1}
  }

    render(): React.ReactNode {
        return <div>
          <Link to={"/"}>
            <img style={{width: "12%", padding: "15px", paddingBottom: "2px"}} src={dark_logo_transparent_background}/>
          </Link>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div>Stage {this.state.stage} / 3 </div>
          </div>
          {this.state.stage == 1 && <StudentFirstStage/>}
        </div>
      }
}

export default StudentSignup;


