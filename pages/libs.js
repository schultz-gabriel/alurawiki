import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/NewBox';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {ItemBox} from '../src/components/ItemBox';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';



function ProfileSidebar(propriedades) {
    return (
      <Box as="aside">
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
        <hr />
  
        <AlurakutProfileSidebarMenuDefault />
      </Box>
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
      'mateushenrique-dev',
      'ikyrie',
      'Garoze',
      'rafaballerini',
      'leonardonegrao',
      'Eddart157'
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
            <p>As bibliotecas, assim como os frameworks, são poderosas ferramentas que nós devs usamos o tempo todo. Por isso, é imprescindível que entendamos e dominamos o seu uso. Aqui vão algumas dessas ferramentas que usamos nesse projeto, (optei por também colocar outras no qual não são libs nem frameworks, mas são importantes para o desenvolvimentodos dos projetos.).</p>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dp0zB4n3MUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              </ItemBox>


                <ItemBox>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"></img>
                    <div>
                <h2>React JS</h2>
            <p>A estrela da Imersão, o <a target="_blank" href="https://pt-br.reactjs.org/">ReactJS</a> é hoje sem dúvidas o principal framework front-end do mundo! Aprender seu funcionamento é como ter em mãos a manopla do infinito, e pra dominar o universo, basta querer. O site em português é bastante didático e nos permite aprender literalmente do zero, com projetinhos desenvolvidos pela própria equipe ReactJS, vale a pena conferir!</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"></img>
                    <div>
                <h2>Next.js</h2>
            <p>Sem o <a target="_blank" href="https://nextjs.org/">Next.js</a>, trabalhar com React seria uma tarefa árdua, fazendo dessa estrutura um requisito de extrema importância na hora de montar suas aplicações. Se o React é a manopla do infinito, o Next.js com certeza é uma de suas jóias mais poderosas.</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png"></img>
                    <div>
                <h2>JSONWebToken</h2>
            <p>O <a target="_blank" href="https://jwt.io/">JST</a> é um padrão de criação de dados de autenticação na web, ou "tokens", como comumente os chamamos. Utilizar essa ferramenta vai te levar a um outro patamar de desenvolvimento, possibilitando a manutenção de dados mais sensíveis como login(cuidado ao sair programando sozinho coisas desse tipo, essa ferramenta requer muita responsabilidade).</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://lh3.googleusercontent.com/proxy/vhsYydP8OFqYLIVyeskHBXOC1ac-fz5gzBUponKPlU7F6QjhtS5WgeehsvSNBAhNWL9L_5ThB01LUMxzzWw_yikVcP18tAb6"></img>
                    <div>
                <h2>Nookies</h2>
            <p>Outra ferramenta incrível, o <a target="_blank" href="https://www.npmjs.com/package/nookies">Nookies</a> nos possibilita trabalhar com cookies, pequenos dados temporários em nosso navegador que são são uma mão na roda em vários momentos do funcionamento da nossa aplicação. Use com responsabilidade!</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://seeklogo.com/images/D/datocms-logo-1C41129CD8-seeklogo.com.png"></img>
                    <div>
                <h2>DatoCMS</h2>
            <p>CMS é sinônimo de Sistema de Gestão de Conteúdo, e o <a target="_blank" href="https://www.datocms.com/">DatoCMS</a> é uma ferramenta poderosa nessa área tão importante. CMS é dessas áreas do conhecimento que fazem diferença no portfólio de um dev, então não hesite em abusar dessa ferramenta(obviamente, não use além da necessidade, até porque a versão grátis é pouco permissiva quanto ao tráfego de dados e logo logo sua aplicação quebrará se não pagar pela versão premium).</p>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://user-images.githubusercontent.com/3025322/87547253-bf050400-c6a2-11ea-950a-280311bc6cc8.png"></img>
                    <div>
                <h2>Babel</h2>
            <p>Um forte aliado dos devs atualmente, o <a target="_blank" href="https://babeljs.io/">Babel</a> é um transcompilador que altera nosso código JS para versões mais antigas compatíveis com o maior número de navegadores possível. Essa ferramente expandirá e muito os seus horizontes, não hesite em usá-la!</p>
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