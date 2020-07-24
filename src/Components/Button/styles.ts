import styled, { useTheme } from 'styled-components/native';
import {variant} from 'styled-system'
import { TouchableOpacityProps } from 'react-native';

interface IButton extends TouchableOpacityProps {
  variant: any
}

const getStyleByProps = (theme: any, variant: string, property: string) => {
  if (theme.buttons[variant]) {
    return theme.buttons[variant][property]
  }
  return false
}

export const ButtonDefault = styled.TouchableOpacity<IButton>`
  width: 80%;
  min-height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  background-color: ${({theme, variant}) => getStyleByProps(theme, variant, 'bg') || 'transparent'}
  border: ${({theme, variant}) => getStyleByProps(theme, variant, 'border') || 'none'}
`;

export const TextButton = styled.Text<IButton>`
  color: ${({theme, variant}) => getStyleByProps(theme, variant, 'color') || '#000'}
  font-size: 18px;
`
