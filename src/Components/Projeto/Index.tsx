import { Card, ButtonLink } from './styles'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com React JS</Paragrafo>
    <ButtonLink>Visualizar</ButtonLink>
  </Card>
)

export default Projeto
