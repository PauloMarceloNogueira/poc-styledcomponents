import React, { Fragment } from 'react';
import { View } from 'react-native';
import { ButtonDefault, TextButton } from './styles';

// import { Container } from './styles';

enum ButtonTypes {
  Primary = "Primary",
  Secondary = "Secondary",
  OutlinePrimary = "OutlinePrimary",
  OutlineSecondary = 'OutlineSecondary',
  Ghost = 'Ghost'
}

interface ButtonI {
  type: ButtonTypes
  handleFc: Function
  text: string
  outline?: boolean
}

const Button: React.FC<ButtonI> = ({type, handleFc, text, outline}) => {
  
  return <Fragment>
      <ButtonDefault variant={type} onPress={handleFc}>
        <TextButton variant={type}>{text}</TextButton>
      </ButtonDefault>
  </Fragment> 
}

export default Button;