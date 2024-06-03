import AppleIcon from '@assets/desktop/apple-podcast.svg';
import GoogleIcon from '@assets/desktop/google-podcasts.svg';
import SpotifyIcon from '@assets/desktop/spotify.svg';
import PocketCastIcon from '@assets/desktop/pocket-casts.svg';

import { mq } from '@utils/breakpoints';

function SourceList() {
  const icons = [SpotifyIcon, AppleIcon, GoogleIcon, PocketCastIcon];
  return (
    <div
      css={mq({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: ['space-between', 'flex-start', 'flex-start'],
        columnGap: ['0px', '20px', '20px'],
        rowGap: ['4px'],
        marginTop: ['33px', '64px', '64px'],
        marginBottom: '24px',
      })}
    >
      {icons.map((icon, idx) => (
        <img
          key={`icon${idx}`}
          src={icon}
          alt={`icon-${idx}`}
          css={mq({
            height: ['17px', '29px', '29px'],
          })}
        />
      ))}
    </div>
  );
}

export default SourceList;
