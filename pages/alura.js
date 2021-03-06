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
                <h2>Programa????o</h2>
            <p>Programe nas principais linguagens e plataformas. Explore plataformas como Python, Node.JS, PHP, Java, e .NET a fundo, al??m de muito conte??do em outras linguagens como GoLang, Clojure, C/C++, VB ou Cobol. Iniciantes s??o bem vindos nos cursos de l??gica e JavaScript.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-programacao">
            Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://i.imgur.com/gJfH9ml.png"></img>
                    <div>
                <h2>Front-end</h2>
            <p>Desenvolva sites e webapps com HTML, CSS e JavaScript. Aprenda as boas pr??ticas e as ??ltimas vers??es do JavaScript. Estude ferramentas e frameworks do mercado como React, Angular, Webpack, jQuery e mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-front-end">
            Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/NKdPHEa.png"></img>
                    <div>
                <h2>Data Science</h2>
            <p>Aprenda a trabalhar com dados. Do Excel ao Python e Machine Learning. Use os principais bancos SQL do mercado e fa??a an??lises de dados com business intelligence. Pandas, SciKitLearn, Jupyter e mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-data-science">
            Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/nEVpjQL.png"></img>
                    <div>
                <h2>DevOps</h2>
            <p>Aprenda Git, Docker e Kubernetes e entenda a entrega cont??nua. Estude administra????o de redes, Linux e gerencie servidores na nuvem. Explore o mundo de Internet das coisas e da rob??tica.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-devops">
            Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://i.imgur.com/T2Lraq8.png"></img>
                    <div>
                <h2>UX & Design</h2>
            <p>Crie designs de qualidade atrav??s de aulas din??micas com conceitos e ferramentas nos principais softwares do mercado. Crie layouts para impressos ou plataformas digitais. Edite v??deos ou crie anima????es. Aventure-se no universo da modelagem virtual 3D ou torne-se um ilustrador. Aprenda a capturar e tratar imagens com qualidade profissional.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-design-ux">
            Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/cdq59Y4.png"></img>
                    <div>
                <h2>Mobile</h2>
            <p>Crie aplicativos m??veis para as principais plataformas, smartphones e tablets. Aprenda frameworks multiplataforma como Flutter e React Native e saiba como criar apps nativas para Android e iOS. Desenvolva tamb??m jogos mobile com Unity.</p>
              <a target="_blank" href="https://www.alura.com.br/cursos-online-mobile">
              Come??ar agora
            </a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img className="alura__formation" src="https://imgur.com/dihrNNd.png"></img>
                    <div>
                <h2>Inova????o e Gest??o</h2>
            <p>A transforma????o digital est?? cada vez mais presente no nosso dia a dia e vindo pra ficar. Prepare-se para aplicar em seu dia a dia t??cnicas de gest??o de produtos e projetos, agilidade, lideran??a, desenvolvimento pessoal e muito mais.</p>
            <a target="_blank" href="https://www.alura.com.br/cursos-online-inovacao-gestao">
              Come??ar agora
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