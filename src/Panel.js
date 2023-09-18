import React, {Component} from 'react';
import './Panel.css';
class Panel extends React.Component{
  constructor(){
    super();
    this.state = {
      pressedKey: 'None',
      pressedKeyCode: 'None',
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    // Remove the keydown event listener when the component unmounts
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if(event.key === ' '){
      this.setState({pressedKey: "Space"});
    }else{
    this.setState({pressedKey: event.key});
    } 
    this.setState({pressedKeyCode: event.keyCode});
  }
  render(){

    return(
        <div className="wrapper">
        <main className="panel">
          <h3>Press any key!</h3>
          <hr/>
          <section className="codes">
            <section className="eventKeyCode code">
              <h2>{this.state.pressedKeyCode}</h2>
              <br/>
              event.keyCode
            </section>
            <section className="eventKey code">
              <h2>{this.state.pressedKey}</h2>
              <br/>
              event.key
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Panel;