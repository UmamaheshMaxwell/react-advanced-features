import React, {Component} from 'react'

class Welcome extends Component {

    render(){
        return (
            <div>
                <h1>Name is {this.props.name} and has skill {this.props.skill} - {this.props.children}</h1>
            </div>
        )
    }
}

export default Welcome;