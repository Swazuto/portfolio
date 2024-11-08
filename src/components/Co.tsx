import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { ExternalLinkIcon } from './Icons';

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 200,
  -(x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x: number, y: number, s: number): string =>
  `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Co = ({
  url,
  name,
  iconReference,
  tagline,
  role,
  what,
  pretext,
}: {
  url: string;
  name: string;
  iconReference: string;
  tagline: string;
  role: string;
  what: string;
  acquired?: boolean;
  pretext?: string;
}) => {
  return (
    <A href={url} target="_blank" rel="noopener">
      <Container>
        <Header>
          <img alt={`${name} Logo`} draggable={false} src={iconReference} />
          <div>
  {pretext ? <sub>{pretext}</sub> : null}
  <h3 style={{ display: 'flex', alignItems: 'center' }}>
    {name} <img src="https://i.imgur.com/jTyYcqp.png" alt="External Link Icon" style={{ width: '24px', height: '24px', margin: '0 5px', filter: 'grayscale(100%)' }} />
  </h3>
  <span>{tagline}</span>
</div>
        </Header>
        <Content>
          <h3>Cargo</h3>
          <p>{role}</p>
          <h3>O que é</h3>
          <p>{what}</p>
        </Content>
      </Container>
    </A>
  );
};

const A = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none !important;
  }
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid hsl(var(--primary-800));
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  will-change: transform;
  overflow: hidden;

  &:hover {
    background-color: hsl(var(--primary-800));
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  border-bottom: 1px solid hsl(var(--primary-800));
  padding: 1rem;

  img {
    width: 70px;
    height: 70px;
    border-radius: 25%;
    margin-right: 1rem;
  }

  div {
    flex: 1;

    sub {
      text-transform: uppercase;
      color: #fc2769;
      letter-spacing: 2px;
    }

    h3 {
      margin: 0;
    }

    svg {
      width: 15px;
      height: 15px;
      color: #ccc;
    }

    span {
      color: #ccc;
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

export default Co;
