import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/NewBox';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {ItemBox} from '../src/components/ItemBox';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import {AsideBox} from '../src/components/AsideBox'



function ProfileSidebar(propriedades) {
    return (
      <AsideBox as="aside">
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
        <hr />
  
        <AlurakutProfileSidebarMenuDefault />
      </AsideBox>
    )
  }

  function ProfileRelationsBox(propriedades) {
    return (
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {propriedades.title} ({propriedades.items.length})
        </h2>
        <ul>
          {propriedades.items.slice(0,6).map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a target='_blank' href={`https://github.com/${itemAtual.login}`}>
                  <img src={itemAtual.avatar_url} />
                  <span>{itemAtual.login}</span>
                 </a>
              </li>
            )            
    })}
        </ul>
      </ProfileRelationsBoxWrapper>  
    )
  }

export default function Alura(props) {
    const usuarioAleatorio = props.githubUser;
    const pessoasFavoritas = [
      'peas',
    'omariosouto',
    'juunegreiros',
    'guilhermesilveira',
    'rafaballerini',
    'SchultzGabriel'
    ]

    const [seguidores, setSeguidores] = React.useState([]);
      React.useEffect(function() {
      fetch(`https://api.github.com/users/${usuarioAleatorio}/followers`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function(respostaCompleta) {
        setSeguidores(respostaCompleta);
      })
    }, [])


    return (
        <>
      <AlurakutMenu githubUser={ usuarioAleatorio }/>
          <MainGrid>
            {/* <Box style="grid-area: profileArea;"> */}
            <div className="profileArea" style={{ gridArea: 'profileArea' }}>
              <ProfileSidebar githubUser={usuarioAleatorio} />
            </div>
            <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
              <ItemBox>
                  <img className="alura__banner" src="https://i.imgur.com/2Ufsbu1.png"></img>
              </ItemBox>

                
            <ItemBox>
                    <img className="alura__formation" src="https://i.imgur.com/Wpoc7SK.png"></img>
                    <div>
                <h2>Programação</h2>
            <p>Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, além de muito conteúdo em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes são bem vindos nos cursos de lógica e JavaScript.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-programacao">
            Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://i.imgur.com/gJfH9ml.png"></img>
                    <div>
                <h2>Front-end</h2>
            <p>Desenvolva sites e webapps com HTML, CSS e JavaScript. Aprenda as boas práticas e as últimas versões do JavaScript. Estude ferramentas e frameworks do mercado como React, Angular, Webpack, jQuery e mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-front-end">
            Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/NKdPHEa.png"></img>
                    <div>
                <h2>Data Science</h2>
            <p>Aprenda a trabalhar com dados. Do Excel ao Python e Machine Learning. Use os principais bancos SQL do mercado e faça análises de dados com business intelligence. Pandas, SciKitLearn, Jupyter e mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-data-science">
            Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/nEVpjQL.png"></img>
                    <div>
                <h2>DevOps</h2>
            <p>Aprenda Git, Docker e Kubernetes e entenda a entrega contínua. Estude administração de redes, Linux e gerencie servidores na nuvem. Explore o mundo de Internet das coisas e da robótica.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-devops">
            Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://i.imgur.com/T2Lraq8.png"></img>
                    <div>
                <h2>UX & Design</h2>
            <p>Crie designs de qualidade através de aulas dinâmicas com conceitos e ferramentas nos principais softwares do mercado. Crie layouts para impressos ou plataformas digitais. Edite vídeos ou crie animações. Aventure-se no universo da modelagem virtual 3D ou torne-se um ilustrador. Aprenda a capturar e tratar imagens com qualidade profissional.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-design-ux">
            Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/cdq59Y4.png"></img>
                    <div>
                <h2>Mobile</h2>
            <p>Crie aplicativos móveis para as principais plataformas, smartphones e tablets. Aprenda frameworks multiplataforma como Flutter e React Native e saiba como criar apps nativas para Android e iOS. Desenvolva também jogos mobile com Unity.</p>
              <a target="_blank" href="https://www.alura.com.br/cursos-online-mobile">
              Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/dihrNNd.png"></img>
                    <div>
                <h2>Inovação e Gestão</h2>
            <p>A transformação digital está cada vez mais presente no nosso dia a dia e vindo pra ficar. Prepare-se para aplicar em seu dia a dia técnicas de gestão de produtos e projetos, agilidade, liderança, desenvolvimento pessoal e muito mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-inovacao-gestao">
              Começar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                <div>
                <a target="_blank" href="https://www.alura.com.br/">MERGULHE AGORA MESMO</a>
                </div>
            </ItemBox>
            
            


              
              


              </div>



              <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBox title="Seguidores" items={seguidores} />
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Alura no GitHub
            </h2>
            <ul>
              {pessoasFavoritas.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a target='_blank' href={`https://github.com/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
  }


export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
} 