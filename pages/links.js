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
                  DICAS DE ESTUDO
                </h1>
                <p>Teve dificuldade ao compreender certos momentos da Imers??o? O uso daquela ferramenta n??o ficou muito clara na sua cabe??a? Sem problemas! Todo mundo quebra a cabe??a ao aprender coisas novas, e muitas dessas ferramentas s??o realmente complexas, mas n??o precisam ser complicadas! Por isso aqui v??o links para voc?? criar bases s??lidas na constru????o do seu conhecimento.</p>
                </div>
              </ItemBox>

              <ItemBox>
                    <img src="https://i.imgur.com/xguHPz2.png"></img>
                    <div>
                <h2>JAVASCRIPT PARA REACT</h2>
            <p>Programar em React com certeza exige uma funda????o s??lida no conhecimento de JavaScript. Voc?? pode at?? construir algum c??digo de in??cio sem saber muito JS mas uma hora ou outra vai resbalar nessa falta de conhecimento. Por isso, n??o deixe para aprender depois! Aqui est?? um curso gratuito de JavaScript para iniciantes em React com o professor mais feliz do mundo!</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=aUDgoPsrPNg&list=PLirko8T4cEmzWZVn_ZKQbfDOuCnSZJ4va">Confira no YouTube</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/E7OZvie.png"></img>
                    <div>
                <h2>NEXT.JS, SEO E PERFORMANCE</h2>
            <p>Se voc?? leu a p??gina de frameworks e bibliotecas, entendeu o qu??o importante ?? o Next.js. O Dev Soutinho chegou para te ajudar a polir essa j??ia do infinito com muitas dicas valiosas que v??o te transoformar em um super-dev!</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=c8mVlakBESE&list=PLTcmLKdIkOWlpvlk5vHaCxwlobqLvcPq6">Confira no Youtube</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/8sEGkLW.png"></img>
                    <div>
                <h2>Rest vs GraphQL: Qual usar?</h2>
            <p>Durante sua jornada na carreira de desenvolvedor, voc?? vai irremediavelmente se encontrar numa situa????o em que precisa gerenciar dados. As condi????es e recursos podem variar muito, por isso ?? fundamental ter sabedoria na hora de escolher controlar o fluxo de dados da sua aplica????o. Nessa bel??ssima live, a Rafa Ballerini ilumina nossos caminhos com uma convidada muito especial!</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=ejYtSlH4QUE&list=PLhkO7OMKgT_r-WzhqzfXcgeJf5S6TkY2x&index=4">Confira no Youtube</a>
            </div>
            </ItemBox>
            {/* <ItemBox>
                    <img src=""></img>
                    <div>
                <h2></h2>
            <p> </p>
            <a target="_blank" href=""></a>
            </div>
            </ItemBox> */}


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