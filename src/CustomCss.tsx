import { Global } from '@emotion/react';

function CustomCss() {
  return (
    <Global
      styles={() => ({
        h1: {
          fontWeight: 300,
          margin: 0,
        },
      })}
    ></Global>
  );
}

export default CustomCss;
