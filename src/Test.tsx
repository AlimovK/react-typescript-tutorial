import React, {useRef} from 'react';

const Test = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onAdd = () => {
        console.log(inputRef.current?.value)
    }
    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={onAdd}>add</button>
        </div>
    );
};

export default Test;