import React, { Fragment } from 'react';
import { ButtonDefault, TextButton } from './Button.styles';

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

export const Button: React.FC<ButtonI> = ({ type, handleFc, text }) => {

  return <Fragment>
    <ButtonDefault variant={type} onPress={handleFc}>
      <TextButton variant={type}>{text}</TextButton>
    </ButtonDefault>
  </Fragment>
}
