import React, { Fragment } from 'react'
import styled from 'styled-components'


const Wrapper =styled.div`
margin-top:7vh;
`
const Grid =styled.div`
margin-left:5vh;
h3,p{
   margin:0;
}
margin-bottom:3vh;
@media (max-width:880px){
   grid-gap:.2vh;
  
       
}
`
const Container =styled.div`

margin-left:5vh;
h3,p{
   margin:0;
}
display:grid;
grid-template-columns:repeat(2,1fr) ;

@media (max-width:880px){
   grid-gap:.2vh;
   margin:0;
}
`

const Experience = ({exp}) => {
  exp.map(item=>console.log(item.id))
  console.log(exp.length)
  const halfExp = exp.length/2
  console.log(halfExp) 
    return (
        <Wrapper> 
     <Container >
     {exp.map(item=>
    item.id < halfExp ?
      <Grid key={item.id}>
        <h3>* {item.compnyName}</h3>
        <p>{item.rule}</p>
        <p >{item.period}</p>
     </Grid>
   :
        <Grid key={item.id}>
        <h3>* {item.compnyName}</h3>
        <p>{item.rule}</p>
        <p >{item.period}</p>
     </Grid>
     )}
     </Container>

    
    
        </Wrapper>
    )
}

export default Experience
