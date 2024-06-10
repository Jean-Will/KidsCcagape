
import styled from "styled-components";
import Form from "../Form/Form";



const ContainerStyled = styled('div')(({}) => ({
    width: '100vh',
    maxWidth:'800px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'10px',
    border:"solid 1.5px",
  }));


export default function Materiais () {
  return (
    <>
    <ContainerStyled >
        
        <Form />
        
    </ContainerStyled>
    

    
    </>
  );
};
