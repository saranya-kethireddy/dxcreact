import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

 class Parentcomp extends PureComponent {
constructor(props) {
    super(props)

    this.state = {
         name: 'saranya-parentcompnew'
    }
}

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'saranya-parentcomp-memo'
            })
        }, 2000);
    }

    render() {
        console.log('******************* parent component************************')
        return (
            <div>
                Parent component
                
                <MemoComp name = {this.state.name}/>
            </div>
        )
    }
}

export default Parentcomp