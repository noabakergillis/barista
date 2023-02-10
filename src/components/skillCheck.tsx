import React from "react";

interface Props {
  text: String
}

interface State {
    isChecked: Boolean
}


class SkillCheck extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {isChecked: false}
    }

  render(): React.ReactNode {
    return <div style={{
        backgroundColor: this.state.isChecked ? "black" : "#FAE4CF",
        padding: "10px",
        color: this.state.isChecked ? "white" : "black",
        border: "1px solid rgba(0,0,0,1)",
        letterSpacing: "2px",
        transition: ".2s all ease-in-out",
        outline: "none",
        boxShadow: "3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0,0,0,1)",
        marginRight: "7px",
        cursor: "pointer"
    }} onClick={() => {
        const currentCheckState = this.state.isChecked
        this.setState({isChecked: !currentCheckState})
    }}>
        <p>{this.props.text}</p>
    </div>
  }
}

export default SkillCheck;
