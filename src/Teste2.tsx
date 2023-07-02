import { useState } from 'react'
import styled from 'styled-components'

function Teste2() {
  const [click, setClick] = useState(false)

  type BotaoProps = {
    click: boolean
    fontSize?: string
  }

  const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.click ? 'yellow' : 'black')};
    font-size: ${(props) => props.fontSize || '16px'};
  `

  const BotaoDanger = styled(Botao)`
    span {
      text-decoration: line-through;
    }
  `

  return (
    <>
      {/* <Botao fontSize="32px" click>
        Clique aqui
      </Botao>
      <Botao click={false}>Clique aqui</Botao>

      <BotaoDanger click={click} onClick={() => setClick(!click)}>
        <span>Danger</span>
      </BotaoDanger> */}
    </>
  )
}

export default Teste2
