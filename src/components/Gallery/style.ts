import styled from 'styled-components'
import { Container, cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;

  > img {
    border-radius: 9px;
    border: 2px solid ${cores.branca};
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }
`

export const MotalContent = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
