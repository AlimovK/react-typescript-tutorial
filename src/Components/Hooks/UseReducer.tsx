import {useReducer} from 'react';


interface State {
    counter:number
}
type Action = {
    type:'increment' | 'decrement'
}
const UseReducer = () => {
        const reducer = (state:State,action:Action) => {
            switch (action.type){
                case "increment": return {counter:state.counter+1}
                case "decrement": return {counter:state.counter-1}
                default: return state
            }
        }
        const [state,dispatch]  = useReducer(reducer,{counter:0})

    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={()=>dispatch({ type:"increment" })}>increment</button>
            <button onClick={()=>dispatch({ type:"decrement" })}>increment</button>

        </div>
    );
};

export default UseReducer;