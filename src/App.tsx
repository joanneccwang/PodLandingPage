import mq from './breakpoints.ts';

import Logo from '@components/Logo';
import Board from './Board';

function App() {
  return (
    <div css={() => mq({})}>
      <Logo></Logo>
      <Board></Board>
    </div>
  );
}

export default App;
