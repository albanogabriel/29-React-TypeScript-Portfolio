import Titulo from '../../Components/Titulo'
import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const SideBar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gabriel Albano da Silva</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        albanogabriel
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolver Front-End, UX e UI Designer, Bacharel em Publicidade e
        Propaganda e cursando Análise e Desenvolvimento de Sistemas
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
