import styled from "styled-components";

export const Container = styled.div<{selected?:boolean}>`
display: flex;
border: 2px solid ${props => props.selected ? "#25CD89" : "#16195C"};
border-radius: 10px;
padding: 20px;
margin-bottom: 15px;
align-items: center;
cursor: pointer;
gap: 20px;

&:hover{
    border: 2px solid #25CD89;
}
`

export const Icon = styled.div`
border-radius: 50%;
width: 60px;
height: 60px;
background-color: #191A59;
display: flex;
align-items: center;
justify-content: center;
font-size: 25px;



`

export const Info = styled.div`
flex: 1;

`
export const Title = styled.div`
font-size: 17px;
font-weight: bold;
margin-bottom: 7px;

`
export const Description = styled.div`
font-size: 14px;
color: #B8B8D4;

`