import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum consectetur tenetur fugit molestias saepe hic nesciunt, temporibus iure, dolorem alias maxime maiores quisquam expedita, voluptatibus illum iste porro ea.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-fast.vercel.app/api?username=Reinaldo-Sn&show_icons=true&theme=radical"/>
      <img src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Reinaldo-Sn&hide_progress=false&theme=radical&layout=compact"/>
    </GithubSecao>
  </section>
)

export default Sobre
