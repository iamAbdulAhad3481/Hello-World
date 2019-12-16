import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycle A Constructor')
    }
    static getDerivedStateFromProps(props){
        console.log('LifeCycle A getDerivedStateFromProps')
        return(
            null
        )
    }
    componentDidMount()
    {
        console.log('LifeCycle A componentDidMount')
        
    }

    render() {
        console.log('LifeCycle A render')

        return (
            <div>
                LifeCycleA 
                
            </div>
        )
    }
}

export default LifeCycleA
