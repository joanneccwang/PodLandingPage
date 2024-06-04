import { useState } from 'react';
import { mq } from '@utils/breakpoints';

function EmailRequest() {
  const [email, setEmail] = useState('');
  const [errorState, setErrorState] = useState<{
    isError: null | boolean;
    errorMsg: string;
  }>({
    isError: null,
    errorMsg: '',
  });

  const handleInputEmail = (e: React.FormEvent) => {
    const value = (e.target as HTMLInputElement)?.value;
    setEmail(value);
  };
  const handleSubmit = () => {
    const emailRegex = /[a-zA-Z0-9.]+@[a-zA-Z0-9.]+/g;
    if (email.trim().length === 0) {
      setErrorState({ isError: true, errorMsg: 'Oops! Please add your email' });
    } else if (!emailRegex.test(email)) {
      setErrorState({
        isError: true,
        errorMsg: 'Oops! Please check your email',
      });
    } else {
      // normally do some api calls here
      setErrorState({ isError: false, errorMsg: 'Successfully requested!' });
    }
  };
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
          maxLength={1000}
          css={(theme) =>
            mq({
              position: 'absolute',
              top: 0,
              width: 'calc(100% - 64px)',
              height: '100%',
              fontWeight: 400,
              backgroundColor: 'transparent',
              color: theme.colors.white,
            })
          }
          onInput={handleInputEmail}
        ></input>

        {errorState.isError !== null && (
          <div
            css={(theme) => ({
              color: errorState.isError ? theme.colors.red : theme.colors.green,
              position: 'absolute',
              top: 'calc(100% + 8px)',
              fontSize: '12px',
              fontWeight: 700,
            })}
          >
            {errorState.errorMsg}
          </div>
        )}
      </div>
      <button
        css={(theme) =>
          mq({
            backgroundColor: theme.colors.green,
            color: theme.colors.black,
            borderRadius: theme.borderRadius,
            cursor: 'pointer',
            fontWeight: 400,
            position: ['relative', 'absolute', 'absolute'],
            width: '100%',
            maxWidth: ['100%', '162px', '162px'],
            height: ['46px', 'calc(100% - 10px)', 'calc(100% - 10px)'],
            top: ['auto', '5px', '5px'],
            right: ['auto', '5px', '5px'],
            '&:hover': {
              backgroundColor: theme.colors.greenHover,
            },
          })
        }
        onClick={() => handleSubmit()}
      >
        Request Access
      </button>
    </div>
  );
}

export default EmailRequest;
