import styled from "styled-components"
export default function Header(){
  return(
  <div>
      <Heading>Family Wellness</Heading>
      <SubHeading>massage therapy</SubHeading>
      <NavBar>
        <Item>home</Item>
        <Item>about</Item>
        <Item>services</Item>
        <Item>faq</Item>
        <Item>contact</Item>
      </NavBar>
    </div>

  )
}
const Heading =styled.h2`
    font-family: 'PT Sans';
    color: #991f48;
    font-size: 40px;
    font-weight: normal;
    line-height: 1.4;

`
const SubHeading =styled.h4`
text-transform:uppercase;
letter-spacing:.1em;
font-weight:normal;
`
const NavBar=styled.ul`
display:flex;
text-decoration:none;
list-style:none;
background-color: #991f48;
justify-content:space-between;
padding:.5rem 0;
color:white;
margin:.5rem 0;
`
const Item=styled.li`
text-transform:uppercase;
`
