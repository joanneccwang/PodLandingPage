import DotImg from '@assets/desktop/bg-pattern-dots.svg';
import DesktopBg from '@assets/desktop/image-host.jpg';
import PadBg from '@assets/tablet/image-host.jpg';
import MobileBg from '@assets/mobile/image-host.jpg';

import { mq, breakpoints } from '@/utils/breakpoints';

const BackgroundImage = () => {
  return (
    <picture>
      <source media={`(max-width: ${breakpoints[0]}px)`} srcSet={MobileBg} />
      <source media={`(max-width: ${breakpoints[1]}px)`} srcSet={PadBg} />
      <img
        src={DesktopBg}
        alt='background image'
        css={mq({
          position: ['relative', 'absolute', 'absolute'],
          top: '0px',
          right: '0px',
          transform: [
            '',
            'translateY(calc(50vh - 50%))',
            'translateY(calc(50vh - 50%))',
          ],
          filter: ['brightness(20%)', 'none', 'none'],
          objectFit: ['cover', 'none', 'none'],
          height: ['100%', 'unset', 'unset'],
        })}
      />
    </picture>
  );
};

const DottedImage = () => {
  return (
    <img
      src={DotImg}
      alt=''
      css={mq({
        display: ['none', 'inline', 'inline'],
        position: ['initial', 'absolute', 'absolute'],
        right: ['initial', 'initial', '0px'],
        left: ['initial', '0px', 'initial'],
        bottom: ['initial', '0px', '0px'],
        transform: ['unset', 'unset', 'translateY(-50%)'],
      })}
    />
  );
};

function Background() {
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <BackgroundImage />
      <DottedImage />
    </div>
  );
}

export default Background;
