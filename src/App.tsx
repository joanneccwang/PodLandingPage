import Board from './Board';

function App() {
  return (
    <div css={(theme) => ({ fontSize: '50px', color: theme.colors.green })}>
      <Board></Board>
    </div>
  );
}

export default App;
