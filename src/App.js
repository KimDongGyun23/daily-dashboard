import './App.css';
import Content from './layout/Content';
import Side from './layout/Side';
import OuterContainer from './UI/OuterContainer';

function App() {
  return (
    <OuterContainer>
      <Side />
      <Content />
    </OuterContainer>
  );
}

export default App;
