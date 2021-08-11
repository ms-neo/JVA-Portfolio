import React,{useState} from 'react'
import styled from 'styled-components'
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link, } from 'react-router-dom'


const Wrapper =styled.div`
ul{
    margin:7vh 0;
    padding:0;
    display:flex;
    flex-direction:column;
    
}
li{
    list-style:none;
    margin:3vh 0;
    ${'' /* padding:2.5vh 0; */} */}

}
a{
    text-decoration:none;
    color:#fff;
    height:3vh;
    width:100%;
    padding:5vh 9vh 2vh 0;
    font-size:18px;
    &:hover{
        color:#0CCCAD;
    }
   
}
@media (max-width:880px){
    ul{
 flex-direction:row;
 justify-content:space-between;
 align-items:center;
 margin:5vh 0;
    }
    li{
    margin:0 ;
}
a{
    padding:0vh 1vh;
    font-size:15px;
}
  
}


`




const SideBar = () => {
  
    return (
        <Wrapper>
            <ul>
                <li><Link to='/'  >Home</Link></li>
                <li><Link to='/experience' >Experiences</Link></li>
                <li><Link to='/aboutme'>Who I am</Link></li>
                <li><Link to='/contactme'>Contact Me</Link></li>
            </ul>
        </Wrapper>

 
    )
}

export default SideBar
