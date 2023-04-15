import React, {createContext, FC} from 'react';


export interface IAuthContext {
    isAuth:boolean
    showMessage:(data:string)=>void
}
interface IChildren {
    children:React.ReactNode
}
export const AuthContext = createContext<IAuthContext>({
    isAuth:false,
    showMessage:()=>{}
})
const Context:FC<IChildren> = ({children}) => {
    const context:IAuthContext = {
        isAuth:true,
        showMessage:(data)=>{
        alert(data)
        }}
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;