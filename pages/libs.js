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

export default function Libs(props) {
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
                  <div>
                <h1 className="title">
                  FRAMEWORKS E BIBLIOTECAS
                </h1>
            <p>As bibliotecas, assim como os frameworks, s??o poderosas ferramentas que n??s devs usamos o tempo todo. Por isso, ?? imprescind??vel que entendamos e dominamos o seu uso. Aqui v??o algumas dessas ferramentas que usamos nesse projeto, (optei por tamb??m colocar outras no qual n??o s??o libs nem frameworks, mas s??o importantes para o desenvolvimentodos dos projetos.).</p>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dp0zB4n3MUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              </ItemBox>


                <ItemBox>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"></img>
                    <div>
                <h2>React JS</h2>
            <p>A estrela da Imers??o, o <a target="_blank" href="https://pt-br.reactjs.org/">ReactJS</a> ?? hoje sem d??vidas o principal framework front-end do mundo! Aprender seu funcionamento ?? como ter em m??os a manopla do infinito, e pra dominar o universo, basta querer. O site em portugu??s ?? bastante did??tico e nos permite aprender literalmente do zero, com projetinhos desenvolvidos pela pr??pria equipe ReactJS, vale a pena conferir!</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"></img>
                    <div>
                <h2>Next.js</h2>
            <p>Sem o <a target="_blank" href="https://nextjs.org/">Next.js</a>, trabalhar com React seria uma tarefa ??rdua, fazendo dessa estrutura um requisito de extrema import??ncia na hora de montar suas aplica????es. Se o React ?? a manopla do infinito, o Next.js com certeza ?? uma de suas j??ias mais poderosas.</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png"></img>
                    <div>
                <h2>JSONWebToken</h2>
            <p>O <a target="_blank" href="https://jwt.io/">JST</a> ?? um padr??o de cria????o de dados de autentica????o na web, ou "tokens", como comumente os chamamos. Utilizar essa ferramenta vai te levar a um outro patamar de desenvolvimento, possibilitando a manuten????o de dados mais sens??veis como login(cuidado ao sair programando sozinho coisas desse tipo, essa ferramenta requer muita responsabilidade).</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png"></img>
                    <div>
                <h2>Nookies</h2>
            <p>Outra ferramenta incr??vel, o <a target="_blank" href="https://www.npmjs.com/package/nookies">Nookies</a> nos possibilita trabalhar com cookies, pequenos dados tempor??rios em nosso navegador que s??o s??o uma m??o na roda em v??rios momentos do funcionamento da nossa aplica????o. Use com responsabilidade!</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://seeklogo.com/images/D/datocms-logo-1C41129CD8-seeklogo.com.png"></img>
                    <div>
                <h2>DatoCMS</h2>
            <p>CMS ?? sin??nimo de Sistema de Gest??o de Conte??do, e o <a target="_blank" href="https://www.datocms.com/">DatoCMS</a> ?? uma ferramenta poderosa nessa ??rea t??o importante. CMS ?? dessas ??reas do conhecimento que fazem diferen??a no portf??lio de um dev, ent??o n??o hesite em abusar dessa ferramenta(obviamente, n??o use al??m da necessidade, at?? porque a vers??o gr??tis ?? pouco permissiva quanto ao tr??fego de dados e logo logo sua aplica????o quebrar?? se n??o pagar pela vers??o premium).</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png"></img>
                    <div>
                <h2>Babel</h2>
            <p>Um forte aliado dos devs atualmente, o <a target="_blank" href="https://babeljs.io/">Babel</a> ?? um transcompilador que altera nosso c??digo JS para vers??es mais antigas compat??veis com o maior n??mero de navegadores poss??vel. Essa ferramente expandir?? e muito os seus horizontes, n??o hesite em us??-la!</p>
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