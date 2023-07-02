import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import GitHubStats from './styles'

const Sobre = () => (
  <aside>
    <Titulo fontSize={14}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit suscipit
      exercitationem veniam id fugiat consectetur, quis dolorum laboriosam
      dignissimos molestias minus corporis nisi aliquid excepturi cum sit quasi
      vel recusandae.
    </Paragrafo>
    <GitHubStats>
      <img src="https://github-readme-stats.vercel.app/api?username=albanogabriel&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=albanogabriel&layout=compact&langs_count=7&theme=dracula" />
    </GitHubStats>
  </aside>
)

export default Sobre
