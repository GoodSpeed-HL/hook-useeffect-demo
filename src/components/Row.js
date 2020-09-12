import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components';
import {flash, fadeIn} from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;
const bounceAnimation2 = keyframes`${flash}`;

const BouncySpan = styled.span`
  animation: 1s ${bounceAnimation};
`;

const BouncySpan2 = styled.span`
  animation: 1s ${bounceAnimation2};
`;



const Row = React.memo(function Row(props) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        setToggle(!toggle);
    }, [props.data.address])
    console.log("did update " + props.data.id)
    return (
        <>
            <td key={1}>{props.data.id}</td>
            <td key={2}>{props.data.name}</td>
            <td>{toggle ? <BouncySpan>{props.data.address}</BouncySpan> : <BouncySpan2>{props.data.address}</BouncySpan2>}</td>
            <td>
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: `${props.data.process}%`}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100">
                        {props.data.process}%
                    </div>
                </div>
            </td>
        </>
    );
});


export default Row;