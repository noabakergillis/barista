import '../App.css';
import * as React from 'react'
import StudentFirstStage from '../components/studentFirstStage';
import dark_logo_transparent_background from '../dark_logo_transparent_background.png'
import { Link } from 'react-router-dom';
import StudentSecondStage from '../components/studentSecondStage';
import StudentThirdStage from '../components/studentThirdStage';

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
          <div style={{display: "flex", justifyContent: "center", letterSpacing: "2px",}}>
            <div>Stage {this.state.stage} / 3 </div>
          </div>
          {this.state.stage == 1 && <StudentFirstStage onButtonClicked={() => this.setState({stage: 2})}/>}
          {this.state.stage == 2 && <StudentSecondStage 
              onBackButtonClicked={() => this.setState({stage: 1})}
              onNextButtonClicked={() => this.setState({stage: 3})}/>}
          {this.state.stage == 3 && <StudentThirdStage onBackButtonClicked={() => this.setState({stage: 2})}/>}
        </div>
      }
}

export default StudentSignup;


