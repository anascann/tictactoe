import React, {useState} from 'react';
import Icon from './components/Icon';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import {ToastContainer, toast} from "react-toastify";
import {Card, CardBody, Container, Button, Col,Row} from 'reactstrap';
import './App.css';
const itemArray =new Array(9).fill("empty");



const App=()=>{
    const[isCross, setIsCross]=useState(false);
    const [winMessage,setWInMessage]=useState("");

    const reloadGame=()=>{
        setIsCross(false);
        setWInMessage("");
        itemArray.fill("empty",0,9);

    }

    const checkIsWinner=()=>{
        if(itemArray[0]===itemArray[1] && 
            itemArray[0]===itemArray[2] && itemArray[0]!=="empty"){
                setWInMessage(`${itemArray[0]} wins`)

            }

            else if(
                itemArray[3]!=="empty" &&
                itemArray[3]===itemArray[4]&&
                itemArray[4]===itemArray[5]
            ){
                setWInMessage(`${itemArray[3]} won`)
            }

            else if(itemArray[6]!=="empty" &&
            itemArray[6]===itemArray[7]&&
            itemArray[7]===itemArray[8]){
                setWInMessage(`${itemArray[6]} won`)
            }

            else if(
                itemArray[0]!=="empty"&&
                itemArray[0]===itemArray[3]&&
                itemArray[3]===itemArray[6]
            ){
                setWInMessage(`${itemArray[0]} won`);

            }

            else if(itemArray[1]!=="empty"&&
            itemArray[1]===itemArray[4]&&
            itemArray[4]===itemArray[7]){
                setWInMessage(`${itemArray[1]} won`)
            }else if(
                itemArray[2]!=="empty"&&
                itemArray[2]===itemArray[5]&&
                itemArray[5]===itemArray[8]
            ){
                setWInMessage(`${itemArray[2]} won`)
            }

            else if(
                itemArray[0]!=="empty"&&
                itemArray[0]===itemArray[4]&&
                itemArray[4]===itemArray[8]
            ){
                setWInMessage(`${itemArray[0]} won`);

            }
            else if(itemArray[2]!=="empty" &&
            itemArray[2]===itemArray[4]&&
            itemArray[4]===itemArray[6]){
                setWInMessage(`${itemArray[2]} won`)
            }


    }

    const changeItem=itemNumber=>{
        if(winMessage){
            return toast(winMessage,{type: " success"})
        }
        if(itemArray[itemNumber]==="empty"){
            itemArray[itemNumber]= isCross ? "cross": "circle";
            setIsCross(!isCross);

        }else{
            return toast("already filled",{type: "error"})

        }

        checkIsWinner();

    }
    return(
        <container className="p-5">
        <ToastContainer position="bottom-center"/>
        <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
            <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
            {winMessage};
            </h1>
            <Button color="success" block onClick={reloadGame}>Reload Game</Button>
            </div>
        ): (

            <h1 className="text-center text-warning">
            {isCross ? "Cross":"Circle"}turns
            </h1>
        )}
        <div className="grid">
        {itemArray.map((item,index)=>(
             <Card color="warning" onClick={()=>changeItem(index)}>
            <CardBody className="box">
            <Icon name={item}/>
            
            </CardBody>
            </Card>
        ))}
        </div>
        </Col></Row>
        </container>
        
    )
}

export default App;