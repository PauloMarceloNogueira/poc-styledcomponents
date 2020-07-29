import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface IButton extends TouchableOpacityProps {
  variant: any
}

export const ButtonDefault = styled.TouchableOpacity<IButton>`
  width: 80%;
  min-height: 60px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  background-color: ${({ theme, variant }) => styles(theme)[variant]?.bg || 'transparent'}
  border: ${({ theme, variant }) => styles(theme)[variant]?.border || 'none'}
`;

export const TextButton = styled.Text<IButton>`
  color: ${({ theme, variant }) => styles(theme)[variant]?.color || '#000'}
  font-size: 18px;
`

function styles({ colors }: any) {
  const theme = {
    Primary: {
      bg: colors.primary,
      color: colors.white
    },
    Secondary: {
      bg: colors.secondary,
      color: colors.white
    },
    OutlinePrimary: {
      bg: 'transparent',
      border: `1px solid ${colors.primary}`,
      color: colors.secondary
    },
    OutlineSecondary: {
      bg: 'transparent',
      border: `1px solid ${colors.secondary}`,
      color: colors.primary
    },
    Ghost: {
      color: colors.black
    }
  }

  return theme
}


// function styles ({ colors, mode }: any) {
//   console.log(mode);

//   const theme = {
//     light: {
//       Primary: {
//         bg: colors.primary,
//         color: colors.white
//       },
//       Secondary: {
//         bg: colors.secondary,
//         color: colors.white
//       },
//       OutlinePrimary: {
//         bg: 'transparent',
//         border: `1px solid ${colors.primary}`,
//         color: colors.secondary
//       },
//       OutlineSecondary: {
//         bg: 'transparent',
//         border: `1px solid ${colors.secondary}`,
//         color: colors.primary
//       },
//       Ghost: {
//         color: colors.black
//       }
//     },
//     dark: {
//       Primary: {
//         bg: '#F0A6CA',
//         color: '#9C89B8'
//       },
//       Secondary: {
//         bg: '#B8BEDD',
//         color: '#F0A6CA'
//       },
//       OutlinePrimary: {
//         bg: 'transparent',
//         border: '1px solid #F0A6CA'
//       },
//       OutlineSecondary: {
//         bg: 'transparent',
//         border: '1px solid #B8BEDD'
//       },
//       Ghost: {
//         color: colors.black
//       }
//     }
//   }

//   return theme[mode]
// }
