import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {RiMailSendLine} from 'react-icons/ri'


const Heading =styled.div`
color:#fff;
display:flex;
justify-content:space-between;
align-items:center;
@media (max-width:880px){
    flex-direction:column;
    align-items:start;
}

`
const LogoIcon =styled.h1`
.logo{
cursor:pointer;
color:#fff;
text-decoration:none;
}
`
const SocialIcons = styled.div`
display:flex;
justify-content:space-between;

`
const Icons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-size:16px;
margin:0 5vh;
p{
    padding-left:1vh;  
}
    @media (max-width:880px){
        padding-left:0;
        margin-left:0vh;
       
}
`

const StyledLink = styled(Link)`
text-decoration:none;
color:#fff;
&:hover{
    color:#0CCCAD;
}
`
const Logo = () => {
    return (
        <Heading>
            <LogoIcon><Link to='/' className="logo">Jeffrey</Link></LogoIcon>
<SocialIcons>
<Icons>
<RiMailSendLine color="#0CCCAD" />
<StyledLink to="/contactme">
<p>Email</p>
</StyledLink>
</Icons>
<Icons>
<AiFillLinkedin color="#0CCCAD" />
<StyledLink to={{pathname : "https://www.linkedin.com/in/jeffreyvanalebeek/"}} target="_blank">
<p>Linkden</p>
</StyledLink>
</Icons>
    
 
</SocialIcons>
        </Heading>
    )
}

export default Logo
