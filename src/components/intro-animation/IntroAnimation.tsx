import LoaderIcon from 'assets/icons/loader.svg';
import { KEY_ANIMATION } from 'config/keys';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Image, Wrapper } from './styles';
import { shouldPlayAnimation } from './utils/shouldPlayAnimation';

type IntroAnimationProps = PropsWithChildren;

export function IntroAnimation({ children }: IntroAnimationProps) {
  const [shouldPlay, setShouldPlay] = useState(shouldPlayAnimation);

  useEffect(() => {
    function animationPlayed() {
      localStorage.setItem(KEY_ANIMATION, Date.now().toString());
      setShouldPlay(false);
    }

    if (!shouldPlay) return undefined;

    const timeout = setTimeout(animationPlayed, 2800);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (shouldPlay) {
    return (
      <Wrapper>
        <Image src={LoaderIcon} />
      </Wrapper>
    );
  }

  return <>{children}</>;
}
