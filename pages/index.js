import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/NewBox';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import {PostArea} from '../src/components/PostArea';
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

export default function Home(props) {
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
  const [posts, setPosts] = React.useState([]);

  // 0 - Pegar o array de dados do github 
  React.useEffect(function() {
    fetch(`https://api.github.com/users/${usuarioAleatorio}/followers`)
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })
  }, [])

  //  API GraphQL
  //  fetch('https://graphql.datocms.com/', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': '9bcb177f6095be872305166c56b04b',
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //   },
  //   body: JSON.stringify({ "query": `query {
  //     allPosts {
  //       id
  //       content
  //       image
  //       link
  //       user
  //     }
  //   }` })
  // })
  // .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
  // .then((respostaCompleta) => {
  //   const postsVindosDoDato = respostaCompleta.data.allPosts;
  //   setPosts(postsVindosDoDato)
  // })
  



  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return (
    <>
      <AlurakutMenu githubUser={ usuarioAleatorio }/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) {usuarioAleatorio}!
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">Que tal contribuir com um post? :)</h2>
            <form onSubmit={function handleCriaPost(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const setPost = {
                  'user': usuarioAleatorio,
                  'content':dadosDoForm.get('content'),
                  'image': dadosDoForm.get('image'),
                  'link':dadosDoForm.get('link')
                }
                fetch('/api/posts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(setPost)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  const post = dados.registroCriado;
                  const postsAtualizados = [...posts, post];
                  setPosts(postsAtualizados)
                  alert('Obrigado pela sua contribuição! Os moderadores já estão analizando seu post.')
                })
            }}>
              <div>
                <input
                  placeholder="Diga-nos o que você acha importante."
                  name="content"
                  aria-label="Diga-nos o que você acha importante."
                />
              </div>
              <div>
                <input
                  placeholder="(opcional) ilustre seu post com uma imagem"
                  name="image"
                  aria-label="(opcional) ilustre seu post com uma imagem"
                />
              </div>
              <div>
                <input
                  placeholder="Insira uma URL para direcionarmos o link"
                  name="link"
                  aria-label="Insira uma URL para direcionarmos o link"
                />
              </div>

              <button>
                Postar
              </button>
            </form>
          </Box>


            <ul>
              {posts.map((itemAtual) => {
                
                return (
                  <PostArea key={itemAtual.id}>
                  <li >
                    <div className="post__op">
                    <a className="post__op--link" target="_blank" href={`https://github.com/${itemAtual.user}`}>
                    <img className="post__op--icon" src={`https://github.com/${itemAtual.user}.png`} />                     
                     <h2 className="post__op--nick">{itemAtual.user}</h2>
                      </a>

                    </div>
                  <p className="post__content">{itemAtual.content}</p>
                  <a className="post__link" target="_blank" href={itemAtual.link}>Para saber mais</a>
                      <img className="post__image" src={itemAtual.image} />
                  </li>
                  </PostArea>
                )
              })}
              <PostArea>
                  <li >
                    <div className="post__op">
                    <a className="post__op--link" target="_blank" href={`https://github.com/SchultzGabriel`}>
                    <img className="post__op--icon" src={`https://github.com/SchultzGabriel.png`} />                     
                     <h2 className="post__op--nick">SchultzGabriel</h2>
                      </a>

                    </div>
                  <p className="post__content">A coisa mais legal que aprendi estudando desenvolvimento foi trabalhar com flexbox. Além de divertido, te dá super poderes!</p>
                  <a className="post__link" target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Para saber mais</a>
                      <img className="post__image" src="https://www.bitdegree.org/learn/storage/media/images/661999ba-c216-4c71-b959-82f878309730.o.png" />
                  </li>
                  </PostArea>
                  <PostArea>
                  <li >
                    <div className="post__op">
                    <a className="post__op--link" target="_blank" href={`https://github.com/SchultzGabriel`}>
                    <img className="post__op--icon" src={`https://github.com/SchultzGabriel.png`} />                     
                     <h2 className="post__op--nick">SchultzGabriel</h2>
                      </a>

                    </div>
                  <p className="post__content">Dentre os vários conhecimentos valiosos dessa imersão, os ifs ternários foram surpreendentemente assustadores mas surpreendentemente lindos de se usar depois de aprendidos.</p>
                  <a className="post__link" target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Para saber mais</a>
                      <img className="post__image" src="https://miro.medium.com/max/1838/1*wSgzVAgKIfFmW6FtULRVOA.png" />
                  </li>
                  </PostArea>
            </ul>

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