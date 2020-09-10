import React, {useCallback, useEffect, useRef, useState} from 'react'
import Row from "./Row";

function TestList(props){
    const [running, setRunning] = useState(false);
    const [dummy, setDummy] = useState(false);
    const ticker = useRef();

    const tick = useCallback( () => {

    }, [ticker])

    useEffect(() => {
        console.log(props)
        ticker.current = setInterval( () => {
            props.refresh( (Math.random()*800).toFixed(0));
        },100);
        return () => {
            clearInterval(ticker.current)
        };
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.refresh();
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>address</td>
                    </tr>
                </thead>
                <tbody>
                {props.data.map(item => {

                    return (<tr key={item.id}>
                        <Row data={item}/>
                    </tr>)
                })}
                </tbody>
            </table>
            <button onClick={handleClick}>Refresh</button>
        </>
    )

}

export default TestList;