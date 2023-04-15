import React, {FC,useContext} from 'react';
import {AuthContext, IAuthContext} from "../../Contex/Contex";
const UseContext:FC = () => {
    const {isAuth,showMessage} = useContext<IAuthContext>(AuthContext)
    const handeSubmit =()=>{
        showMessage('hello world')
    }
    return (
        <div>
            <h1>
                {isAuth?'home page': 'please login'}
            </h1>
            <button onClick={handeSubmit}>
                {isAuth? 'log out': 'login'}
            </button>
        </div>
    );
};

export default UseContext;