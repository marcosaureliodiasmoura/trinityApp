import React, {Component} from 'react';

import {Title, ContainerTitle,ContainerDescription,
Description, ContainerImage, ContainerImage2,
ContainerImg1,
ContainerImg2,
ContainerImg3,
ContainerImg4,
Modal,
ModalContainer,
ModalClose,
ModalImage,
ModalTitle,
ModalButton,
 } from './styles';
import GlobalStyle from '../styles/global';
import img1 from '../images/img1.jpg';


class App extends Component {

  state = {
    show: false,
    title: '',
    img: `${img1}`,
  }

  showModal = () => {
    this.setState({ show: true });
    this.setState({ title: 'Lake Wakatipu'});
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render(){
    return (
      <>
        <GlobalStyle/>
           
            <ContainerTitle>
            <Title>New Zealand</Title>
            </ContainerTitle>
            <ContainerDescription>
            <Description>This project might be trickier than it seems. Look around carefully. What you see? The sky is blue, the grass is green. The sun shines throught the window.</Description>
            </ContainerDescription>
           
            <ContainerImage>
              <button
                onClick={this.showModal}>
                <ContainerImg1/>
              </button>

              <button
              onClick={this.showModal}>
              <ContainerImg2/>
              </button>
          </ContainerImage>

         <ContainerImage2>
             <button
             onClick={this.showModal}>
            <ContainerImg3/>
            </button>

            <button
            onClick={this.showModal}>
            <ContainerImg4/>
             </button>
      </ContainerImage2>
 
          { this.state.show? (
            <Modal 
            handleClose={this.hideModal}>
              <ModalContainer>
                <ModalButton>
                <button
                onClick={this.hideModal}>
                  <ModalClose>X</ModalClose>
                </button>
                </ModalButton>
                <ModalTitle>{this.state.title}</ModalTitle>
                  <ModalImage src={img1}/>
              </ModalContainer>
            </Modal>
          ): null}
   </>
    );
  }
}

export default App;
