import React from "react";
import '../App.css';

interface Props {
  text: String,
}



class CustomButton extends React.Component<Props> {


  render(): React.ReactNode {
    return <div>
      <div className="button">
        {this.props.text}
      </div>
      
    </div>
  }
}

export default CustomButton;
