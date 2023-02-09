import React from "react";

interface Props {
  text: String,
}



class CustomButton extends React.Component<Props> {


  render(): React.ReactNode {
    return <div>
      <div style={{
        backgroundColor: "white", 
        borderRadius: "25px", 
        borderStyle: "solid", 
        borderColor: "blue", 
        color: "blue", 
        padding: "25px", 
        fontWeight: 900}}>
        {this.props.text}
      </div>
      
    </div>
  }
}

export default CustomButton;
