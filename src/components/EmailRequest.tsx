import { mq } from '@utils/breakpoints';

function EmailRequest() {
  return (
    <div
      css={mq({
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
        position: 'relative',
        width: '100%',
        maxWidth: ['100%', '427px', '427px'],
        marginTop: ['48px', '40px', '40px'],
      })}
    >
      <div
        css={(theme) =>
          mq({
            borderRadius: theme.borderRadius,
            backgroundColor: theme.colors.gray3,
            width: '100%',
            padding: '0px 32px',
            height: ['46px', '56px', '56px'],
            position: 'relative',
          })
        }
      >
        <input
          type='email'
          placeholder='Email Address'
          css={mq({
            position: 'absolute',
            top: 0,
            width: 'calc(100% - 64px)',
            height: '100%',
            backgroundColor: 'transparent',
          })}
        ></input>
      </div>
      <button
        css={(theme) =>
          mq({
            backgroundColor: theme.colors.green,
            color: theme.colors.black,
            borderRadius: theme.borderRadius,
            fontWeight: 400,
            position: ['relative', 'absolute', 'absolute'],
            width: '100%',
            maxWidth: ['100%', '162px', '162px'],
            height: ['46px', 'calc(100% - 10px)', 'calc(100% - 10px)'],
            top: ['auto', '5px', '5px'],
            right: ['auto', '5px', '5px'],
          })
        }
      >
        Request Access
      </button>
    </div>
  );
}

export default EmailRequest;
