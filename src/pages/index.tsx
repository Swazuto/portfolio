import PageWrapper from '../components/PageWrapper';
import Co from '../components/Co';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled(animated.div)`
  border: 1px solid hsl(var(--primary-800));
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  margin: 20px; /* Adiciona margem para desgrudar das laterais */
  will-change: transform;
  padding-top: 125%;
  max-width: 300px; /* Define a largura máxima do componente */

  &:hover {
    background-color: hsl(var(--primary-800));
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column; /* Altera para uma coluna */
  align-items: center; /* Centraliza os itens */
  height: auto; /* Altura automática */
  border-bottom: 1px solid hsl(var(--primary-800));
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Sazuto</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Projetos e Comunidades</h1>
      <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Co
          url="https://youtube.com/Sazuto"
          name="Sazuto"
          iconReference='https://i.imgur.com/I3o65y6.png'
          tagline="Canal do YouTube"
          role="Criador de Conteúdo, Editor & Thumbmaker"
          pretext="Youtube"
          what="Criei esse canal com o intuito de entreter meu público e postar o que eu gosto de jogar."
        />
        <Co
          url="https://discord.gg/XjupgHw3Fj"
          name="Godly Radio"
          iconReference='https://i.imgur.com/FtUHYTZ.png'
          tagline="Bot de Discord"
          role="Criador & Desenvolvedor"
          pretext="Discord"
          what="Um bot de música originalmente para amigos, mas com grande potencial, portanto agora é para todos."
        />
        <Co
          url="https://loja.dreamers-network.com/"
          name="Dreamers Network"
          iconReference='https://i.imgur.com/B7PVsj2.png'
          tagline="Servidor de Minecraft"
          role="Fundador & CEO"
          pretext="Minecraft"
          what="Um servidor que criei para obter conhecimento, mas que com divulgações e colaborações, se mantém até hoje."
        />
        <Co
          url="https://discord.gg/newdev"
          name="New Dev"
          iconReference='https://cdn.discordapp.com/icons/758308791837786232/5c6ff8778d1b6bb82e349b3be490f5fd.webp'
          tagline="Servidor de Discord"
          role="Fundador & Desenvolvedor"
          pretext="Loja"
          what="Uma loja de vendas de bots para Discord, faça um orçamento!"
        />
        <Co
          url="https://discord.gg/elhero-gg"
          name="El Hero"
          iconReference='https://cdn.discordapp.com/icons/1232448776917221427/4e8bdbcbaa0735253dfecdc0a0f3e122.webp'
          tagline="Servidor de Discord"
          role="Administrador & C.M."
          pretext="Comunidade"
          what="Discord do jogo criado por El Gato, o El Hero!"
        />
        <Co
          url="https://discord.gg/piratealpha"
          name="Pirate Alpha"
          iconReference='https://cdn.discordapp.com/icons/999829995792912584/a_ab77c631b698766ee5ada9dc4970b8ff.gif'
          tagline="Servidor de Discord"
          role="Administrador"
          pretext="Comunidade"
          what="Discord focado em fazer dinheiro na Web3, Salve ABC!"
        />
        <Co
          url="https://discord.gg/8gE88envWq"
          name="Try Hard"
          iconReference='https://cdn.discordapp.com/icons/1233234346719182959/0f6357b14b5586ea423f305099764e0f.webp'
          tagline="Servidor de Discord"
          role="Sócio & Desenvolvedor"
          pretext="Time"
          what="Um time de poker, focado em fazer dinheiro com torneios de poker, Salve sPaw!"
        />
        <Co
          url="https://squarecloud.app/"
          name="Square Cloud"
          iconReference='https://cdn.discordapp.com/emojis/1323647179516280875.png'
          tagline="Site de Hospedagem"
          role="Ex-Community Helper"
          pretext="Loja"
          what="Uma empresa de hospedagem com o intuito direto de ajudar experts e noobs a hospedarem de forma fácil e rápida os seus bots, sites e APIs."
        />
        <Co
          url="https://discord.gg/JkRfF3CtHb"
          name="Clipada"
          iconReference='https://cdn.discordapp.com/icons/1274068331695181928/8ae4642db82580529c5f3c0cd86e5d8a.webp'
          tagline="Servidor de Discord"
          role="Desenvolvedor & C.M."
          pretext="Suporte"
          what="Discord do site clipada.com, criado por El Gato, com intuito de te gerar dinheiro com base no seu engajamento"
        />
        <Co
          url="https://discord.gg/radiantz"
          name="RadiantZ"
          iconReference='https://cdn.discordapp.com/icons/1283618789245845545/a_a8f934ef38bebe5bffd647c954ae5a9d.gif'
          tagline="Servidor de Discord"
          role="Fundador & Desenvolvedor"
          pretext="Comunidade"
          what="Discord focado em fazer dinheiro na Web3, Salve FireZy!"
        />
        <Co
          url="https://discord.gg/thehorderon"
          name="The Horde"
          iconReference='https://cdn.discordapp.com/icons/1302689489759502347/a_362287fbeb773f8fccc40719419041ac.gif'
          tagline="Coleção de NFTs"
          role="Desenvolvedor"
          pretext="Comunidade"
          what="Discord da coleção de NFTs da rede Ronin."
        />
        <Co
          url="https://www.exospirits.com/"
          name="ExoSpirits"
          iconReference='https://pbs.twimg.com/profile_images/1872710135342141440/nCLGyIVX_400x400.jpg'
          tagline="Coleção de NFTs"
          role="Desenvolvedor"
          pretext="Comunidade"
          what="Discord da coleção de NFTs da rede Monad."
        />
        <Co
          url="https://www.blinkplanet.com/"
          name="BlinkPlanet"
          iconReference='https://cdn.discordapp.com/icons/1133021036246478858/8478b17c9f63644e8557a2412a6a0245.webp'
          tagline="Coleção de NFTs"
          role="Desenvolvedor"
          pretext="Comunidade"
          what="Discord da coleção de NFTs da rede Polygon."
        />
      </div>
    </PageWrapper>
  );
};

export default Where;
