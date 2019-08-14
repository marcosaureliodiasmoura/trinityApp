import styled from 'styled-components';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


export const ContainerTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 60px;
`;

export const Title = styled.text`
color: #FFF;
font-size: 33px;
font-weight: bold;
`;

export const ContainerDescription = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
margin-top: 40px;

`;

export const Description = styled.text`
color: #FFF;
font-size: 13px;
font-weight: normal;
margin-top: 5px;
width: 480px;
`;


export const ContainerImage = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

@media (max-width: 700px) {
  flex-direction: column;
  
  }

  @media (min-width: 800px) {
  }

  @media (min-width: 1200px) {
  }

`;

export const ContainerImage2 = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

@media (max-width: 700px) {
  flex-direction: column;
  }

  @media (min-width: 800px) {
  margin-top: 80px;
  margin-left: 80px;
  padding:  0 100px;
  }

  @media (min-width: 1200px) {
  }

`;


export const ContainerImg1 = styled.div`
  background-image: url(${img1});
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin-top: 60px;
  margin-left: 100px;
  border: 1px solid #e2e2e2;

  background-position: left;
  background-repeat: no-repeat; 
  background-size: 563px 380px ; 

  @media (max-width: 600px) {
    margin-right: 100px;
  }

  @media (min-width: 800px) {
  margin-left: 200px;
  }

  @media (min-width: 610px) {
    margin-right: 140px;
  }
  
  
`;

export const ContainerImg2 = styled.div`
  background-image: url(${img2});
  border-radius: 8px;
  width: 350px;
  height: 250px;
  margin-top: 60px;
  margin-right: 100px;
  border: 1px solid #e2e2e2;

  background-position: top left;
  background-repeat: no-repeat; 
  background-size: 620px 460px ;

  @media (max-width: 600px) {
    margin-left: 100px;
  }


  @media (min-width: 610px) {
    margin-top: 80px;

  }
`;

export const ContainerImg3 = styled.div`
  background-image: url(${img3});
  border-radius: 8px;
  width: 300px;
  height: 300px;
  margin-top: 60px;
  margin-left: 80px;
  border: 1px solid #e2e2e2;
  margin-top: 100px;
  margin-bottom: 100px;

  background-position: bottom ;
  background-repeat: no-repeat; 
  background-size: 700px 480px ;

  @media (max-width: 600px) {
    margin-right: 100px;
    margin-top: 60px;

  }

  @media (min-width: 800px) {
    margin-top: 2px;

  }

  @media (min-width: 610px) {
    margin-left: 0px;
  }
`;

export const ContainerImg4 = styled.div`
  background-image: url(${img4});
  border-radius: 8px;
  width: 360px;
  height: 280px;
  margin-top: 60px;
  margin-right: 100px;
  border: 1px solid #e2e2e2;
  margin-top: 100px;
  margin-bottom: 100px;


  background-position:  bottom right;
  background-repeat: no-repeat;
  background-size: 600px;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  @media (max-width: 600px) {
    margin-left: 100px;
    margin-top: 10px;

  }
  @media (min-width: 800px) {

  }

  @media (min-width: 610px) {
    margin-left: 80px;
    margin-top: 10px;

  }
`;


export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #36b0bd;
`;

export const ModalContainer = styled.div`
height: 100%;
width: 100%;

`;

export const ModalButton = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 29%;

@media (max-width: 600px) {
    margin-left: 200px;
    /* background: red; */
  }

@media (min-width: 610px) {
  margin-left: 520px;
  /* background: yellow; */
  }
`;

export const ModalClose = styled.text`
 color: #e2e2e2;
 font-weight: lighter;
 font-size: 60px;
 font: 'Open Sans', sans-serif;
 width: 100%;
`;

export const ModalTitle = styled.text`
 color: #e2e2e2;
 font-weight: bold;
 font-size: 30px;
 font: 'Open Sans', sans-serif;
 display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImage = styled.img`
  width: 60%;
  height: 60%;
  margin-top: 60px;
  margin-left: 20%;
  border: 1px solid #e2e2e2;

  @media (max-width: 600px) {
    width: 300px;
    height: 200px;
      }


  @media (min-width: 610px) {
    width: 60%;
    height: 60%;

  }

`;


