import styled from 'styled-components'

import { Container, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 480px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-top: 16px;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.preto2};
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
