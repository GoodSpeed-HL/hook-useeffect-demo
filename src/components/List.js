import React, {useCallback, useEffect, useRef, useState} from 'react'
import Row from "./Row";
import MyTest from "./Modal";
function TestList(props){
    const [running, setRunning] = useState(false);
    const [dummy, setDummy] = useState(false);
    const ticker = useRef(null);

    const tick = useCallback( () => {

    }, [ticker])

    useEffect(() => {
        console.log(props)
        console.log("register")
        ticker.current = setInterval( () => {
            props.refresh( (Math.random()*800).toFixed(0));
        },100);
        return () => {
            console.log("clear")
            //ticker.current = null;
            clearInterval(ticker.current)
        };

    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.refresh();
    }



    return (

        <div className={"overflow-hidden"}>
            <MyTest/>
            <table className={"table"}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>address</td>
                        <td>progress</td>
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
            <button className={"btn btn-primary"} onClick={handleClick}>Refresh</button>
            <button className={"btn btn-primary"} onClick={props.addNew}>Add</button>

        </div>
    )

}

export default TestList;