import Link from 'next/link';

import { SiYamahacorporation as Logo } from 'react-icons/si';
import { HiHome as Home } from 'react-icons/hi';
import { FaClipboardList as Specs } from 'react-icons/fa';
import { SiGithub as Github } from 'react-icons/si';

import { Container } from './styles';

export const Sidebar = () => (
  <Container>
    <Logo />

    <nav>
      <Link href="/">
        <a title="Home">
          <Home />
        </a>
      </Link>

      <Link href="/specs">
        <a title="Specs">
          <Specs />
        </a>
      </Link>

      <Link href="https://github.com/martins-rafael/">
        <a title="Github" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </Link>
    </nav>
  </Container>
);
