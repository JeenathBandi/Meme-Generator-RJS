// Style your components here
import styled from 'styled-components'

export const MemeContainer = styled.div`
display:flex;
justify-content:center;
`

export const FormContainer = styled.form`
display:flex;
flex-direction:column;
padding:20px;
width:35vw;
`

export const Heading = styled.h1`
font-family:"Open Sans";
color: #35469c;
`

export const InputElement = styled.div`
display:flex;
flex-direction:column;
margin-bottom:15px;
`
export const LabelElement = styled.label`
font-family:"Open Sans";
color:#7e858e;
margin-bottom:5px;
`
export const InputEl = styled.input`
border-radius:4px;
border-color:#7e858e;
backgroubd-color:transparent;
border-style:solid;
border-width:1px;
outline:none;
padding:15px;
`
export const SelectEl = styled.select`
border-radius:4px;
border-color:#7e858e;
backgroubd-color:transparent;
border-style:solid;
border-width:1px;
outline:none;
padding:15px;
`
export const CustomButton = styled.button`
font-family:"Open Sans";
background-color: #0b69ff;
color: #ffffff;
border:none;
outline:none;
cursor:pointer;
border-radius:5px;
padding:10px;
width:10vw;
`
export const GeneratedMemeContainer = styled.div`
padding:30px;
margin-left:50px;
margin-top:50px;
width:40vw;
display:flex;
align-items:center;
justify-content:center;
background-image:url(${props => props.bgImage})

`
export const TopText = styled.p`
font-family:"Open Sans";
color:#ffffff;
align-self:flex-start;
font-size:${props => props.fontSize};
`
export const BottomText = styled(TopText)`
align-self:flex-end;
`
