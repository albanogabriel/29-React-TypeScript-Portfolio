import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  body {
    padding: 80px;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  img {
    max-width: 100%;
  }
`
