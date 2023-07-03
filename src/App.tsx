import { useState } from 'react'

import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import SideBar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [theme, setTheme] = useState(false)

  function changeTheme() {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocarTema={changeTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
