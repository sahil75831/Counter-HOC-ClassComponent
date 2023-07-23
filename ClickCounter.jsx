import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'
class ClickCounter extends React.Component{

    render(){
        const {count, incrementCount} = this.props
        return(
        <>
            <button onClick={incrementCount}> {this.props.name} click {count} times </button>
        </>
        )
    }
}
export default HigherOrderComponent( ClickCounter, 1)