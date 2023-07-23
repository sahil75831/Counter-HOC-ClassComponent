import React from "react";
import HigherOrderComponent from './HigherOrderComponent'
class HoverCounter extends React.Component {

    render(){
        const {count, incrementCount} = this.props;
        return(<>
        <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
        </>)
    }
}
export default HigherOrderComponent(HoverCounter, 10)