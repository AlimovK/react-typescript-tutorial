import React, {Component} from 'react';

type StateType = {
    counter:number
}

type PropsType  = {
    title?:string
}
class ClassComponents extends Component<PropsType,StateType> {
    constructor(props:PropsType) {
        super(props);
        this.state = {
            counter:0
        }
    }
    handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e.clientY, e.clientX)
        this.setState({counter:this.state.counter+1})
    }
    render():JSX.Element {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>increment</button>
            </div>
        );
    }
}

export default ClassComponents;