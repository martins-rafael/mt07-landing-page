import { Container } from './styles';

import {
  SiYamahacorporation as Logo,
  SiInstagram as Instagram,
  SiTwitter as Twitter,
  SiYoutube as Youtube,
} from 'react-icons/si';

export const Footer = () => (
  <Container>
    <div>
      <div>
        <Logo size={80} />
      </div>

      <div>
        <a href="#">News</a>
        <a href="#">Shop</a>
        <a href="#">Yamaha Racing</a>
      </div>

      <div>
        <a href="#">Driving School</a>
        <a href="#">Work with Us</a>
      </div>

      <div>
        <a href="#">Privacy</a>
        <a href="#">Give us your opinion</a>
      </div>

      <div>
        <p>Follow Us:</p>
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
    </div>

    <p>©2021 - All Rights Reserved</p>
  </Container>
);
