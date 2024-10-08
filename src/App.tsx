import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
