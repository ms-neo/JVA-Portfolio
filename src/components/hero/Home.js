import React from 'react'
import styled from 'styled-components'
import Img from '../../assets/jeffrey.png'
import Btn from './Button'

const Wrapper =styled.div`
  display:grid;
  font-weight:400;

}
@media (max-width:880px){
  grid-template-columns:1fr;
  
}
` 
const Text =styled.div`
margin:13vh 0;
z-index:100;

h1{
    margin:0;
     padding:0;
     line-height:1.4;
 }
 h5{
    margin:1vh;
    margin-bottom:6vh;
     padding:0;
    font-size:20px;
    font-weight:400;
 }
span{
    background:linear-gradient(101deg, #07BDF6, #0CCCAD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
@media (max-width:880px){
    width:70%;
    margin:5vh 0;
    order:2;
    h1 {
        font-size:1.4rem;
        margin:0;
    }
    h5{
        font-size:14px
    }
}
` 
const Image =styled.img`
position:absolute;
right:0;
bottom:0vh;
z-index:-1;
width:50%;
@media (max-width:880px){
    position:static;
    width:90%;
  order:1;
}
`
const Hero = () => {
    return (
        <Wrapper>
        <Text>
            <h1>Information Technology <span>Specialist</span></h1>
            <h5>Eindhoven, North Brabant, Netherlands</h5>
            <Btn/>
            </Text>
            <Image src={Img} allt="jeffrey's photo" />
        </Wrapper>
    )
}

export default Hero
