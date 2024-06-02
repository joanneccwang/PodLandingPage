import { Global } from '@emotion/react';

function ResetCSS() {
  return (
    <Global
      styles={(theme) => ({
        ':root': {
          backgroundColor: theme.colors.black,
          color: theme.colors.green,
          fontFamily:
            'Chivo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontWeight: 400,
        },

        'body, html': {
          margin: 0,
          padding: 0,
        },

        '*': {
          boxSizing: 'border-box',
        },
      })}
    ></Global>
  );
}

export default ResetCSS;
