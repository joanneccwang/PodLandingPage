import Heading from '@components/Heading';

import mq from './breakpoints';

function Board() {
  return (
    <section
      css={(theme) =>
        mq({
          position: 'absolute',
          margin: '40px',
          top: ['175px', '258px', '165px'],
          maxWidth: ['100%', '625px', '723px'],
          backgroundColor: [
            'transparent',
            theme.colors.black,
            theme.colors.black,
          ],
          paddingTop: ['0', '93px', '88px'],
        })
      }
    >
      <Heading></Heading>
      <p
        css={mq({
          fontSize: ['15px', '18px', '18px'],
          lineHeight: ['25px', '28px', '28px'],
          marginTop: ['16px', '31px', '24px'],
          maxWidth: ['100%', '445px', '445px'],
        })}
      >
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
    </section>
  );
}

export default Board;
