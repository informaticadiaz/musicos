
import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainConatainer } from './Components/MainConatainer';
import { RightMenu } from './Components/RightMenu';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainConatainer />
      <RightMenu />

    <div className='background'></div>
    </div>
  );
}

export default App;
