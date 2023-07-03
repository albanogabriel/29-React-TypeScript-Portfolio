import Titulo from '../../Components/Titulo'
import Projeto from '../../Components/Projeto/Index'

import { Lista } from './styles'
import { ButtonLink, Card } from '../../Components/Projeto/styles'
import Paragrafo from '../../Components/Paragrafo'

const Projetos = () => (
  <aside>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Card>
          <Titulo>Landing Page Full Stack Design EBAC</Titulo>
          <Paragrafo>HTML, CSS, JavaScript, SASS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://22-exercicio-ebac-full-stack-designer-landing-page-9db0gqhtt.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Atrium Studios by xtay</Titulo>
          <Paragrafo>html, css, sass, JS, Boostrap, AOS Animate</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://21-exercicio-atrium-studios-by-xtay-landing-page-1.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Disney Plus Landing Page</Titulo>
          <Paragrafo>html, css, sass, JS, Boostrap, AOS Animate</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://21-landing-page-disney.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>

      <li>
        <Card>
          <Titulo>IMC - Calculadora</Titulo>
          <Paragrafo>React, Vite</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://28-react-vite-calculadora-c508gac8f-albanogabriel.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Git Hub Search API</Titulo>
          <Paragrafo>React, Vite, API Fetch</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://28-react-git-hub-api.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Calculadora VueJS</Titulo>
          <Paragrafo>VueJS, Vite</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://27-vue-js-calculadora.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>To-do List - VueJS</Titulo>
          <Paragrafo>Vue, Vite</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://27-vue-js-to-do-list.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Birthday Event Countdown</Titulo>
          <Paragrafo>HTML, CSS, JS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://22-exercicio-birthday-gabriel.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Art Gallery - BoraCordar</Titulo>
          <Paragrafo>HTML, CSS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://20-boracodar-artgallery.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Tech Talks Event</Titulo>
          <Paragrafo>HTML, CSS, JS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://22-tech-talks-event.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>The News E-mail Marketing</Titulo>
          <Paragrafo>HTML, CSS, JS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://20-the-news-daily-emkt.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
      <li>
        <Card>
          <Titulo>Nike E-mail Marketing</Titulo>
          <Paragrafo>HTML, CSS, JS</Paragrafo>
          <ButtonLink
            target="_blank"
            href="https://20-nike-project-emkt.vercel.app/"
          >
            Visualizar
          </ButtonLink>
        </Card>
      </li>
    </Lista>
  </aside>
)

export default Projetos
