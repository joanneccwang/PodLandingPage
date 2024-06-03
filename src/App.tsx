import { mq } from '@utils/breakpoints';
import Logo from '@components/Logo';
import Board from './Board';

function App() {
  return (
    <div
      css={() =>
        mq({ border: '1px solid skyblue', width: '100%', position: 'relative' })
      }
    >
      <Logo></Logo>
      <Board></Board>
    </div>
  );
}

export default App;
