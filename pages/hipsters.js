import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/NewBox';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {ItemBox} from '../src/components/ItemBox';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
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

export default function Hipsters(props) {
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
                  <img className="hipsters__logo" src="https://www.alura.com.br/artigos/assets/uploads/2019/02/hipsters-ponto-tech-melhores-episodios5.png"></img>
              </ItemBox>


                <ItemBox>
                    <img src="https://i.imgur.com/dTvrgTJ.png"></img>
                    <div>
                <h2>Guia do iniciante em React</h2>
            <p>Um episódio pra lá de especial pra você que quer mergulhar no mundo do React mas não sabe por onde começar.
Desmistificamos os termos e te mostramos os caminho das pedras para iniciar com essa tecnologia tão popular!</p>
<iframe width="320" height="30" src="https://hipsters.tech/?powerpress_embed=3222-podcast&amp;powerpress_player=mediaelement-audio" frameborder="0" scrolling="no"></iframe>
            <a target="_blank" href="https://hipsters.tech/guia-do-iniciante-em-react-hipsters-209/">Confira no site</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/dTvrgTJ.png"></img>
                    <div>
                <h2>React: o framework onipresente</h2>
            <p>Neste episódio conversamos sobre o React, este framework que aparece em tudo que é lugar hoje em dia (às vezes até onde não deve) e que promete resolver vários problemas do dev moderno.</p>
            <iframe width="320" height="30" src="https://hipsters.tech/?powerpress_embed=1281-podcast&amp;powerpress_player=mediaelement-audio" frameborder="0" scrolling="no"></iframe>
            <a target="_blank" href="https://hipsters.tech/react-o-framework-onipresente-hipsters-66/">Confira no site</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/dTvrgTJ.png"></img>
                    <div>
                <h2>JavaScript: manual de sobrevivência</h2>
            <p>Você provavelmente já ouviu alguma piada relacionada à quantidade de frameworks e ferramentas que existem no ecossistema Javascript. Isso porque a linguagem é uma das que mais mudam e se adaptam às tendências atualmente.
Conversamos sobre como você pode se manter atualizado e não se perder em meio à tanta informação!</p>
<iframe width="320" height="30" src="https://hipsters.tech/?powerpress_embed=2661-podcast&amp;powerpress_player=mediaelement-audio" frameborder="0" scrolling="no"></iframe>
            <a target="_blank" href="https://hipsters.tech/javascript-manual-de-sobrevivencia-2020-hipsters-169/">Confira no site</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/dTvrgTJ.png"></img>
                    <div>
                <h2>O Reino encantado do JavaScript</h2>
            <p>JavaScript tomou  a comunidade de desenvolvedores como uma tempestade! Saiu de patinho feio para a queridinha hipster. Como isso aconteceu? O que mudou? Onde e como ele é utilizado atualmente? Bem, a resposta é simples: em todo lugar, de todas as maneiras. Vamos falar de alguns frameworks, alguns usos e reclamar bastante. Sim, esquecemos de falar do ember e de outros.</p>
            <iframe width="320" height="30" src="https://hipsters.tech/?powerpress_embed=827-podcast&amp;powerpress_player=mediaelement-audio" frameborder="0" scrolling="no"></iframe>
            <a target="_blank" href="https://hipsters.tech/o-reino-encantado-do-javascript-hipsters-38/">Confira no site</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/dTvrgTJ.png"></img>
                    <div>
                <h2>Evolução do JavaScript</h2>
            <p>Episódio pra entender a evolução os pontos fortes e fracos de uma das lingaugens de programação mais populares da atualidade.</p>
            <iframe width="320" height="30" src="https://hipsters.tech/?powerpress_embed=3487-podcast&amp;powerpress_player=mediaelement-audio" frameborder="0" scrolling="no"></iframe>
            <a target="_blank" href="https://hipsters.tech/evolucao-do-javascript-hipsters-ponto-tech-236/">Confira no site</a>
            </div>
            </ItemBox>
            <ItemBox>
              <div>
              <a target="_blank" href="https://hipsters.tech/">OUÇA A PROGRAMAÇÃO COMPLETA</a>

              </div>
            </ItemBox>

              </div>



              <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBox title="Seguidores" items={seguidores} />
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
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