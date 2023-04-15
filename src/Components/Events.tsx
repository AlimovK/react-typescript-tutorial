import React, { FC } from 'react';

const Events:FC = () => {
    const handleCordinate = (e:React.MouseEvent<HTMLButtonElement>): void =>{
        console.log(e.clientY,e.clientX)
    }
    //focus event
    const handleFocus =(e:React.FocusEvent<HTMLInputElement>): void =>{
        console.log(e.currentTarget)
    }
    //form event
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault()
        console.log('submitted')
    }
    //chane event
    const handeChange =(e:React.ChangeEvent<HTMLInputElement>):void =>{
        console.log(e.target.value)
    }

    //link
    const handeShow = (e:React.MouseEvent<HTMLAnchorElement>)=>{
        console.log('link')
    }

    const styles:React.CSSProperties = {display:'flex',marginTop:'10px'}
    return (
        <div>
            <h1>Events:</h1>
            <button type='submit' onClick={handleCordinate}>get cordinate</button>
            {/* mouse event */}
            {/* form */}
            <form style={styles} onSubmit={handleSubmit}>
                <input type="text" onFocus={handleFocus} onChange={handeChange}/>
                <button type='submit'>submit</button>
            </form>
            <a href="#" onClick={handeShow}>click me</a>
        </div>
    );
};

export default Events;