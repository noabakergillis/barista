import React from "react";
import '../App.css';

interface Props {
  text: String,
}



class CustomButtonLarge extends React.Component<Props> {


  render(): React.ReactNode {
    return <div>
      <div className="button-large">
        {this.props.text}
      </div>
      
    </div>
  }
}

export default CustomButtonLarge;
