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
                <p>Teve dificuldade ao compreender certos momentos da Imersão? O uso daquela ferramenta não ficou muito clara na sua cabeça? Sem problemas! Todo mundo quebra a cabeça ao aprender coisas novas, e muitas dessas ferramentas são realmente complexas, mas não precisam ser complicadas! Por isso aqui vão links para você criar bases sólidas na construção do seu conhecimento.</p>
                </div>
              </ItemBox>

              <ItemBox>
                    <img src="https://i.imgur.com/xguHPz2.png"></img>
                    <div>
                <h2>JAVASCRIPT PARA REACT</h2>
            <p>Programar em React com certeza exige uma fundação sólida no conhecimento de JavaScript. Você pode até construir algum código de início sem saber muito JS mas uma hora ou outra vai resbalar nessa falta de conhecimento. Por isso, não deixe para aprender depois! Aqui está um curso gratuito de JavaScript para iniciantes em React com o professor mais feliz do mundo!</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=aUDgoPsrPNg&list=PLirko8T4cEmzWZVn_ZKQbfDOuCnSZJ4va">Confira no YouTube</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/E7OZvie.png"></img>
                    <div>
                <h2>NEXT.JS, SEO E PERFORMANCE</h2>
            <p>Se você leu a página de frameworks e bibliotecas, entendeu o quão importante é o Next.js. O Dev Soutinho chegou para te ajudar a polir essa jóia do infinito com muitas dicas valiosas que vão te transoformar em um super-dev!</p>
            <a target="_blank" href="https://www.youtube.com/watch?v=c8mVlakBESE&list=PLTcmLKdIkOWlpvlk5vHaCxwlobqLvcPq6">Confira no Youtube</a>
            </div>
            </ItemBox>
            <ItemBox>
                    <img src="https://i.imgur.com/8sEGkLW.png"></img>
                    <div>
                <h2>Rest vs GraphQL: Qual usar?</h2>
            <p>Durante sua jornada na carreira de desenvolvedor, você vai irremediavelmente se encontrar numa situação em que precisa gerenciar dados. As condições e recursos podem variar muito, por isso é fundamental ter sabedoria na hora de escolher controlar o fluxo de dados da sua aplicação. Nessa belíssima live, a Rafa Ballerini ilumina nossos caminhos com uma convidada muito especial!</p>
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