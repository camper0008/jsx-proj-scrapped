import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: '',
        }
    }
    render() {
        return <td 
        className={this.state.type} 
        key={this.props.y} position={this.props.x+'|'+this.props.y} 
        onClick={_ => {
            this.setState({type: 'start'})
        }
        }><div></div></td>
    }
}

export default Cell