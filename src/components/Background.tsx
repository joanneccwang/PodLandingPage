import DotImg from '@assets/desktop/bg-pattern-dots.svg';
import DesktopBg from '@assets/desktop/image-host.jpg';
import PadBg from '@assets/tablet/image-host.jpg';
import mobileBg from '@assets/mobile/image-host.jpg';

import useCheckDevice from '@hooks/useCheckDevice';

function Background() {
  const { isMobile, isPad } = useCheckDevice();
  const isPC = !isMobile && !isPad;
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      {isPC && (
        <div>
          <img
            src={DesktopBg}
            alt='background'
            css={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              transform: 'translateY(calc(50vh - 50%))',
            }}
          />
          <img
            src={DotImg}
            alt=''
            css={{
              position: 'absolute',
              right: '0px',
              bottom: '0px',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      )}
      {isPad && (
        <div>
          <img
            src={PadBg}
            alt='background'
            css={{
              height: '70vh',
              position: 'absolute',
              top: '0px',
              right: '0px',
            }}
          />
          <img
            src={DotImg}
            alt=''
            css={{
              position: 'absolute',
              bottom: '0px',
              left: '0px',
            }}
          />
        </div>
      )}
      {isMobile && (
        <img
          src={mobileBg}
          alt='background'
          css={{
            filter: 'brightness(20%)',
            objectFit: 'cover',
            height: '100%',
          }}
        ></img>
      )}
    </div>
  );
}

export default Background;
