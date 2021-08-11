import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";


const StyledTextField =styled(TextField)`
width:40%;
label{
    color:#ccc;
    font-size:15px;
}
fieldset{
    border-color: #fff;
}
label.Mui-focused {
    color: #07BDF6;
  }
  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #07BDF6;
    }
    &.focused fieldset {
      border-color: #07BDF6;;
    }
  }
  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color:  #07BDF6;
  }
  @media (max-width:880px){
      width:100%;
       
}
`

const Wrapper =styled.div`
margin:2vh 0;
form{
    margin:5vh;
    display:grid;
    grid-gap:2vh;
    
}
h2{
    margin-bottom:.5vh;
}
`
const StyledButton =styled(Button)`
    background:linear-gradient(101deg, #07BDF6, #0CCCAD);
    color:#fff;
  width:40%;
  @media (max-width:880px){
    width:100%;
       
}
`
const ContactMe = () => {
    // const classes = useStyles()
    return (
    <Wrapper>
       <form  autoComplete="off">
       <h2>For more details contact me :</h2>
   
         <StyledTextField id="outlined-basic" label="Your Name" className={"test"} variant="outlined"  size="small"/>
         <StyledTextField id="outlined-basic" label="Subject" variant="outlined" size="small" />
         <StyledTextField id="outlined-basic" label="Write your messsage here" variant="outlined" multiline  />
         <StyledButton variant="contained" color="secondary" fullWidth='false' >
        Send
      </StyledButton>
    
       </form>
    </Wrapper>
    )
}

export default ContactMe
