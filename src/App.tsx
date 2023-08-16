import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { GameDetails, Home, PageNotFount, Login } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-50 dark:bg-slate-900 '>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/game/:id'
          element={<GameDetails />}
        />
        <Route
          path='*'
          element={<PageNotFount />}
        />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
