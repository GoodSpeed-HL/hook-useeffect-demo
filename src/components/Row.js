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
    console.log("did update 2")
    return (
        <>
            <td key={1}>{props.data.id}</td>
            <td key={2}>{props.data.name}</td>
            <td>{toggle ? <BouncySpan>{props.data.address}</BouncySpan> : <BouncySpan2>{props.data.address}</BouncySpan2>}</td>
        </>
    );
});


export default Row;