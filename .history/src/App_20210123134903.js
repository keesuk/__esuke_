import styled from 'styled-components';

const Header = styled.header`
    display:flex; 
    flex-direction:row;
    white-space: nowrap;
    margin-left: 4vw;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <div>
          Projects
        </div>
        <div>
          Index
        </div>
        <div>
          About Me
        </div>
        <div>
          Contact 한글
        </div>
      </Header>
    </div>
  );
}

export default App;
