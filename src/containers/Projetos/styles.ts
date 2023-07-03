import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 36px;
  row-gap: 40px;

  li {
    border: 1px solid ${(props) => props.theme.corDaBorda};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
  }
`
