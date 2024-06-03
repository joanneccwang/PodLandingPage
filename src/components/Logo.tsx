import PodsLogo from '@assets/desktop/logo.svg';

import { mq } from '@utils/breakpoints';

function Logo() {
  return (
    <img
      src={PodsLogo}
      alt='logo'
      css={mq({
        position: 'absolute',
        top: '0px',
        transform: [
          'translate(calc(50vw - 50%), 62px)',
          'translate(40px, 50px)',
          'translate(165px, 102px)',
        ],
      })}
    />
  );
}

export default Logo;
