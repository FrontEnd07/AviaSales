import logo from '@assets/Frame.png';
import style from './App.module.scss';
import TicketList from "@view/TicketList/TicketList"
function App() {
  return (
    <div className={style.main}>
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <TicketList />
    </div>
  );
}

export default App;
