import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preto: '#111111',
  cinza: '#333',
  cinza2: '#A3a3a3',
  verde: '#10AC84',
  preto2: '#000000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
