import githubIcon from 'assets/icons/social/github.svg';
import hhIcon from 'assets/icons/social/hh.svg';
import telegramIcon from 'assets/icons/social/telegram.svg';

import { SocialLink } from './styles';

export function Socials() {
  return (
    <>
      <SocialLink href="https://github.com/Dispersioned" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="#" />
      </SocialLink>
      <SocialLink
        href="https://rostov.hh.ru/resume/23e5510fff09055f900039ed1f327579537633"
        target="_blank"
        rel="noreferrer"
      >
        <img src={hhIcon} alt="#" />
      </SocialLink>
      <SocialLink href="https://t.me/Dispersioned" target="_blank" rel="noreferrer">
        <img src={telegramIcon} alt="#" />
      </SocialLink>
    </>
  );
}
