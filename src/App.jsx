// CSS
import './css/global.css';
import './css/App.css';

//Partes da Página
import { Header } from './partsOfPage/header/Header.jsx';
import { Footer } from './partsOfPage/footer/Footer.jsx';

// Imagens
import Amo from './images/amo.png';
import Forms from './images/Forms.png';
import Computador from './images/computador.png';
import Equipe from './images/foto1.png';

export function App() {
  return (
    <>
      <Header />
      
      <main>
        <section className='first'>
            <h1>
              Pronto para <br />
              arrasar na <br />
              Olimpíada <br />
              Brasileira de <br />
              Informática? <br />
            </h1>
            <div>
              <img src={Amo} alt="Logo AMO"/>
              <h2>Alagoas no Mapa da OBI</h2>
            </div>
        </section>
        
        <section className='second' id="oprojeto">
            <h2>O Projeto</h2>
            <div className='divider'>
              <img src={Computador} alt="Imagem ilustrativa de um computador" />
              <div className='content-text'>
                <h3>Bem-vindos ao projeto "AMO" Alagoas no Mapa da OBI!</h3>

                <p>
                  Bem-vindo ao nosso site do projeto AMO (Alagoas no Mapa da OBI)!
                </p>
                <p>
                  Nosso principal objetivo é incentivar e capacitar jovens talentos a participarem da Olimpíada Brasileira de Informática (OBI) e destacarem-se nessa competição desafiadora.
                </p>
                <p>
                  Nós acreditamos no poder da tecnologia para transformar vidas e queremos incentivar o desenvolvimento de habilidades que irão abrir portas para um futuro promissor. Então, junte-se a nós e faça parte dessa comunidade de jovens talentosos e apaixonados por tecnologia e descubra como a informática pode transformar o seu futuro! Vamos colocar Alagoas no Mapa da OBI!
                </p>
              </div>
            </div>
          
        </section>
    
        <section className='third'>
            {/* Criar componentes para melhorar aqui */}
            <h2>De que forma vamos levar alunos até a OBI!</h2>
            <div className="conteudo">
              <p className='mod'>
                Criamos atividades para serem trabalhadas tanto com os alunos do Instituto Federal de Alagoas - Campus Maceió quanto para o público externo, buscando democratizar o acesso à informática, o aprendizado coletivo e estimular o interesse pela OBI em escolas de diferentes regiões, a fim de capacitar estudantes em lógica de programação, algoritmos e estrutura de dados.
              </p>
              <div className="text-atividades">
                <div className="box-text">
                  <h4>Atividade Interna</h4>
                  <p>
                    O nosso treinamento interno é voltado para atividades de resolução de questões com os alunos do Instituto, praticando com questões reais e fazendo com que os alunos se familiarizem com o formato e a complexidade das provas.
                  </p>
                </div>
                <div className="box-text">
                  <h4>Atividade Externa</h4>
                  <p>
                    O nosso treinamento externo é inclusivo e aberto ao público externo do Instituto Federal de Alagoas (IFAL) - Campus Maceió, com o objetivo de disseminar conhecimento e incentivar a participação de outras escolas (públicas e privadas) na OBI.
                  </p>
                </div>
              </div>
            </div>
        </section>

        <section className='fourth'>
            <h2>Sobre as olimpíadas de informática</h2>
            <p className='mod'>
              As Olimpíadas de Informática são um evento de destaque, congregando jovens talentosos mundialmente para demonstrar suas habilidades em programação e algoritmos. Enfrentando desafios complexos, os participantes não apenas exibem competência técnica, mas também criatividade e raciocínio analítico, promovendo tanto a camaradagem internacional quanto o avanço da ciência da computação. Ao ultrapassar fronteiras geográficas, o evento celebra a paixão compartilhada pela computação, destacando a importância do pensamento lógico e sistemático na resolução de problemas desafiadores. Enquanto competem por reconhecimento, as Olimpíadas oferecem uma valiosa experiência de aprendizado e uma rede global de contatos, nutrindo mentes curiosas e inspirando futuros inovadores no campo da tecnologia.
            </p>
            <div className="know-more">
              <span>Conheça mais!</span>
              <a href="#">Link</a>
            </div>
          
        </section>

        <section className='fifth' id="inscreva-se">
            <h2>Inscreva-se</h2>
            <small className='text'>Para participar dos treinamentos internos responda o formulário abaixo:</small>

            <span>Clique aqui</span>

            <a 
              href="https://forms.gle/sdBgqXM6JiXtxiAg6"
              target="_blank">
              <img 
                src={Forms}
                alt="Forms para inscrição TI" 
              />
            </a>

            {/* <div className="box-baloons">
              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul> 
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>

              <div className="baloons">
                <h3>TÍTULO PARA EXEMPLO</h3>

                <div className="content">
                  <p>Conteúdos:</p>
                  <ul>
                    <li>Conteúdo 1</li>
                    <li>Conteúdo 2</li>
                    <li>Conteúdo 3</li>
                  </ul>
                </div>

                <p>Observações, exemplo</p>
                <a href="#">Inscrever-se</a>
              </div>
            </div> */}

        </section>

        <section className='sixth' id="equipe">
            <h2>Equipe</h2>
            <div className="divider">
              <img src={Equipe} alt="Imagem da Equipe" />
              <p className='text'>
                Conheça a equipe do projeto "AMO - Alagoas no Mapa da OBI", liderado pelo Professor Leonardo Fernandes e composto por jovens talentosos e dedicados. Nossa equipe é formada por alunos entusiasmados em explorar a ciência da computação e programação. Com o apoio e orientação do Professor Leonardo, buscamos ampliar o acesso ao conhecimento da informática em Alagoas, incentivando o pensamento lógico e a resolução de problemas complexos. Juntos, transformamos paixão em aprendizado e estamos determinados a levar Alagoas ao destaque na Olimpíada Brasileira de Informática. Acompanhe-nos nessa jornada de sucesso!
              </p>
            </div>
          
        </section>
      </main>

      <Footer />
    </>
  )
}