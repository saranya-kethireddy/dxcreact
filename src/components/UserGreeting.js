import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
             isLoggedIn : true
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return <div>welcome saranya</div>
        }
        else{
            return <div>welcome </div>
        }
       /*  return (
            <div>
                <div>welcome abdul</div>
                <div>welcome guest</div>
            </div>
        ) */
    }
}

export default UserGreeting