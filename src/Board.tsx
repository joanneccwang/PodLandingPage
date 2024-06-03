import Heading from '@components/Heading';
import SourceList from '@components/SourceList';
import EmailRequest from '@components/EmailRequest';

import { mq } from '@utils/breakpoints.ts';
import useCheckMobile from '@hooks/useCheckMobile.ts';

function Board() {
  const { isMobile } = useCheckMobile();
  return (
    <section
      css={(theme) =>
        mq({
          border: '1px solid hotpink',
          position: 'absolute',
          margin: ['0px', '40px', '40px'],
          padding: ['24px', '0px', '0px'],
          top: ['175px', '258px', '165px'],
          width: '100%',
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
      {isMobile ? (
        <>
          <SourceList></SourceList>
          <EmailRequest></EmailRequest>
        </>
      ) : (
        <>
          <EmailRequest></EmailRequest>
          <SourceList></SourceList>
        </>
      )}
    </section>
  );
}

export default Board;
