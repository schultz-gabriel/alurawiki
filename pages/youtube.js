import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/NewBox';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ItemBox } from '../src/components/ItemBox';
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
        {propriedades.items.slice(0, 6).map((itemAtual) => {
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
  React.useEffect(function () {
    fetch(`https://api.github.com/users/${usuarioAleatorio}/followers`)
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
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
              <h1>ALURA NO YOUTUBE</h1>
              <p>Os criadores de conteúdo da Alura estão sempre nos informando com os melhores vídeos em nossa área, não perca os canais de tecnologia mais quentes do Brasil!</p>
            </div>
          </ItemBox>


          <ItemBox>
            <div className="alura__youtube_box">
            <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/user/aluracursosonline">
              <div>
                <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLRszi3O39AB5-uw_1jkrxJppwegjToBgIKFIOqiiA=s900-c-k-c0x00ffffff-no-rj"></img>
                <h2>Canal da Alura</h2>
              </div>
            </a>
            <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA">
              <div>
                <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLS-CKuhUh_SbSYPf5TCugjWE-6ok7chbNm-daC4=s900-c-k-c0x00ffffff-no-rj"></img>
                <h2>Dev Soutinho</h2>
              </div>
            </a>
            <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/user/RafaellaBallerini">
            <div>
            <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLSL5_ChVaVHp21m_soO5Qv5VfhTxT1tBElCtNuCNg=s900-c-k-c0x00ffffff-no-rj"></img>
              <h2>Rafaella Ballerini</h2>
            </div>
              </a>
          <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCVheRLgrk7bOAByaQ0IVolg">
            <div>
            <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLSsP9fC9UpoJsmhyp907BKXbVi8hJcX_mDFO3DyUw=s900-c-k-c0x00ffffff-no-rj"></img>
              <h2>Marco Bruno</h2>
            </div>
              </a>

          <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCGOF_UsgvLYAudAVjKEkPJA">
            <div>
            <img className="alura__youtube_image" src="https://qconsp.com/sites/default/files/styles/img-single-track/public/guilherme.silveira.jpeg?itok=tTM8eUkJ"></img>
              <h2>Gui Silveira</h2>
            </div>
              </a>

          <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCIQ4a2e9ZcDQhA7QU9NllKg">
            <div>
            <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AAUvwnjnR-0TTgDqNkQHfJiDEQDwUdvaR2hbPzrVXop1bg=s900-c-k-c0x00ffffff-no-rj"></img>
              <h2>Gabs Ferreira</h2>
            </div>
              </a>

          <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/user/AkitaOnRails">
            <div>
            <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLSt8q-3u78Uk5LjZtGN6liv-FIoSs6NuV7_XT1q-mQ=s900-c-k-c0x00ffffff-no-rj"></img>
              <h2>Fabio Akita</h2>
            </div>
              </a>
          <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCNPYYMBKHgLjNpYpS0EWycw">
            <div>
            <img className="alura__youtube_image" src="https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1616501197.jpg"></img>
              <h2>Guilherme Lima</h2>
            </div>
              </a>
              <a className="alura__youtube_content" target="_blank" href="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw">
            <div>
            <img className="alura__youtube_image" src="https://yt3.ggpht.com/ytc/AKedOLTnTjoDN70zAxQqnSOBfj9RxVQ5H0HMZXciBQHY=s900-c-k-c0x00ffffff-no-rj"></img>
              <h2>F. Deschamps</h2>
            </div>
              </a>
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
              {pessoasFavoritas.slice(0, 6).map((itemAtual) => {
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

  if (!isAuthenticated) {
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