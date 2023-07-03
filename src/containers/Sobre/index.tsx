import Paragrafo from '../../Components/Paragrafo'
import Titulo from '../../Components/Titulo'
import GitHubStats from './styles'

const Sobre = () => (
  <aside>
    <Titulo fontSize={14}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Atualmente busco ingressar na área de Desenvolvimento Web, unindo os
      conhecimentos do Desenvolvimento Front-End, UX / UI Design. áreas o qual
      reconheço ser promissoras e alinhadas com os meus talentos. Através do
      curso da EBAC de Full Stack Design, estou construindo um projeto que passa
      por todas as etapas do UX e UI Design, através do modelo de processo de
      Design, o Double Diamond. O modelo de processo engloba desde a primeira
      parte da empatia até o Design Thinking, Figma, Wireframe e Protótipos, o
      UX, Usabilidade, UI, guia WCAG, Heurísticas de Nielsen, Pesquisas e testes
      com usuário, Fundamento da Gestalt, Mobile First. Na parte de
      Desenvolvimento Front-end foquei nas hard skills para o desenvolvimento
      web, como: VSCode, HTML, CSS, JavaScript, SaSS, Bootstrap, Versionamento
      com o Github, Gulp, Less, Grunt, EMKT, Ajax, Fetch API, Promises, Async
      Await, Babel, ES6+, TypeScript, para assim focar no Framework/Library
      ReactJS, atualmente o mais utilizado no mercado. Também fiz o curso da
      Punk Métrics, olhando para a parte analítica do produto para entender o
      comportamento dos usuários e estratégias de mensuração alinhas com o
      negócio
    </Paragrafo>
    <GitHubStats>
      <img src="https://github-readme-stats.vercel.app/api?username=albanogabriel&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=albanogabriel&layout=compact&langs_count=7&theme=dracula" />
    </GitHubStats>
  </aside>
)

export default Sobre
