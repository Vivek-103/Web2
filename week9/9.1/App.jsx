import {useState} from 'react';

export default function App(){
    const [count,setCount] = useState(0); //useState is a hook

    function onClickHandler(){
        setCount(count + 1);
    }
    return(
        <div>
            <button onClick = {onClickHandler}>
                Counter{count}
            </button>
        </div>
    );
}

function Button(props){
    return <button onClick={props.onClickHandler}>Counter</button>
}