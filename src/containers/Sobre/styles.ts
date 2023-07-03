import styled from 'styled-components'

const GitHubStats = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    padding-right: 24px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`

export default GitHubStats
