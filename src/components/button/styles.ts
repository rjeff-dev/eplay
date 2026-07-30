import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branca};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  color: ${cores.branca};
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
