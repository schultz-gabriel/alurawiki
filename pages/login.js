import React from 'react';
// Hook do NextJS
import { useRouter } from 'next/router';
import nookies from 'nookies';



export default function LoginScreen() {
  const router = useRouter();
  const [githubUser, setGithubUser] = React.useState('');

  return (
    <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://i.imgur.com/N0Ve4yc.png" />

          <p><strong>Aprenda</strong> novas tecnologias em parceria com amigos e colegas.</p>
          <p><strong>Conheça</strong> novas pessoas através da comunidade criada em torno do projeto.</p>
          <p><strong>Participe</strong> de projetos e aumente sua influência entre os desenvolvedores.</p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                // alert('Alguém clicou no botão!')
                console.log('Usuário: ', githubUser)
                fetch('https://alurakut.vercel.app/api/login', {
                    method: 'POST',
                    headers: {
                       'Content-Type': 'application/json'  
                    },
                    body: JSON.stringify({ githubUser: githubUser })
                })
                .then(async (respostaDoServer) => {
                    const dadosDaResposta = await respostaDoServer.json()
                    const token = dadosDaResposta.token;
                    nookies.set(null, 'USER_TOKEN', token, {
                        path: '/',
                        maxAge: 86400 * 7 
                    })
                    router.push('/')
                })
          }}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
          </p>
            <input
                placeholder="Usuário"
                value={githubUser}
                onChange={(evento) => {
                    setGithubUser(evento.target.value)
                }}
            />
            {githubUser.length === 0
                ? 'Faça parte dessa linda comunidade!'
                : ''
            }
            <button type="submit">
              Login
            </button>
          </form>

          <footer className="box">
            <p>
              Siga-me nas redes sociais: <br />
              <a target="_blank" href="https://www.instagram.com/bridigabriel/">Instagram</a> - <a target="_blank" href="https://github.com/SchultzGabriel">GitHub</a> - <a target="_blank" href="https://www.linkedin.com/in/gabriel-bridi-schultz/">LinkedIn</a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © 2021 alura.com.br - <a target="_blank" href="https://github.com/topics/alurakut">Outros projetos da Imersão</a> - <a target="_blank" href="https://www.alura.com.br/">Mergulhe em tecnologia</a>
          </p>
        </footer>
      </div>
    </main>
  )
}  