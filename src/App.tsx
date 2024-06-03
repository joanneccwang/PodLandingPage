import { mq } from '@utils/breakpoints';
import Logo from '@components/Logo';
import Background from '@components/Background';
import Board from './Board';

function App() {
  return (
    <div css={() => mq({ width: '100%', position: 'relative' })}>
      <Background></Background>
      <Logo></Logo>
      <Board></Board>
    </div>
  );
}

export default App;
