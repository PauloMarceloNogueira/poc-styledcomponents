import React from 'react';
import { Container } from './AppBar.styles';
import { Button } from '../../Components'

interface IAppBar {
  handleFc: Function
}

export const AppBar: React.FC<IAppBar> = ({ handleFc }) => {
  return (
    <Container>
      <Button type={'Ghost'} {...{ handleFc, text: "Change Theme" }} />
    </Container>
  )
}
