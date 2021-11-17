import React, { Component } from 'react'

export class ClassCounter1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:  0,
            name: ''

        }
    }

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            console.log('updating doc title')
            document.title = `clicked ${this.state.count} times`
        }
    }

    
    render() {
        return (
            <div>

<input
                    type='text'
                    value={this.state.name}
                    onChange={e => { this.setState({ name: e.target.value }) }}
                />


                <button onClick = {this.incrementCount}> 
                count is {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter1