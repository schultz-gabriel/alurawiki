import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
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

export default function Home() {

  
  const usuarioAleatorio = 'SchultzGabriel';
  const [comunidades, setComunidades] = React.useState([{
    key: '12802378123789378912789789123896123', 
    title: 'Em busca do Zoom Master',
    image: 'https://i.ytimg.com/vi/mGXPon0H-Ks/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmlvM_7wBEjenQs_IwFvrSYUXitg',
    link: 'https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA'
  },{
    key: '12802378123789376782789789123896123', 
    title: 'Senhor dos Anéis',
    image: 'https://ovicio.com.br/wp-content/uploads/2020/07/20200730-the-lord-of-the-rings-cinematic-universe-1227689-277x277.jpeg',
    link: 'https://www.youtube.com/channel/UCZTlOgWItTp2_dGQD_9PSSw'
  },{
    key: '12802378123789378912789789128766123', 
    title: 'Canal da Rafa Balle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YQ3AAvNl7ShYo0zYboRAXaDMS_7J5CqDhg&usqp=CAU',
    link: 'https://beacons.ai/rafaballerini'
  },{
    key: '12802542123789378912789789128766123', 
    title: 'Atormentadores do ScubaTeam',
    image: 'https://i.redd.it/ovmgcxcmu5u61.jpg',
    link: 'https://www.instagram.com/aluraonline/?hl=pt-br'
  },{
    key: '12802378123789378912789789000766123', 
    title: 'Futuros Programadores',
    image: 'https://memegenerator.net/img/instances/66862157.jpg',
    link: 'https://www.youtube.com/channel/UCZTlOgWItTp2_dGQD_9PSSw'
  },{
    key: '12802378123459378912789789128766123', 
    title: 'Eu Odeio os Ratos Fumantes',
    image: 'https://pbs.twimg.com/media/Dj_212yXcAASV0a.jpg',
    link: 'https://www.facebook.com/ratosnaopodemfumar/'
  },
]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'mateushenrique-dev',
    'ikyrie',
    'Garoze',
    'rafaballerini',
    'leonardonegrao',
    'Eddart157'
  ]

  return (
    <>
      <AlurakutMenu />
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
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image') || 'https://picsum.photos/200',
                  link: dadosDoForm.get('link'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para direcionarmos o link"
                  name="link"
                  aria-label="Coloque uma URL para direcionarmos o link"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.key}>
                    <a href={`${itemAtual.link}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
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