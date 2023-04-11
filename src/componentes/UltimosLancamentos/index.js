import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemacotar from '../../imagens/acotar.jpeg';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 20px;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
          { livros.map( livro => (
              <img src={livro.img}/>
          ) ) }
        </NovosLivrosContainer>
        <CardRecomenda 
          titulo="Talvez você se interesse por..."
          subtitulo="A corte de espinhos e rosas"
          descricao="O livro Corte de Espinhos e Rosas conta a história de Feyre, uma humana que vive na extrema pobreza e tem que se virar sozinha para sustentar suas duas irmãs e seu pai. 
          O mundo em que ela vive é dividido entre humanos e seres mágicos chamados feéricos, considerados assassinos cruéis da raça humana."
          imagem={imagemacotar}
        />
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos