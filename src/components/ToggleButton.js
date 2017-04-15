import React from 'react';
import '../../css/components/ToggleButton.css';

class ToggleButton extends React.Component {

    constructor(){
        super();
        this.state = { applied: false };
    }

    render() {
        return (
          <button className={this.state.applied ? 'toggle applied' : 'toggle'} onClick={this.toggleState.bind(this)}>{this.props.text}</button>
        );
    }

    toggleState(){       
        this.setState({ applied: !this.state.applied });
    }
}

export default ToggleButton;