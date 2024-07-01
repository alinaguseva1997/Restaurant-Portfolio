import React from 'react';
import './App.css';
import {Header} from "../features/Header/Header";
import {Banner} from "../features/Banner/Banner";
import {NavBar} from "../features/NavBar/NavBar";
import {ColdSnacksContentList} from "../features/MenuContentList/ColdSnacksContentList";
import {Footer} from "../features/Footer/Footer";
import {Portfolio} from "../features/Portfolio/Portfolio";
import {CardProduct} from "../features/CardProduct/CardProduct";

function App() {
  return (
      <div className='w-full h-wull bg-base overflow-y-hidden'>
          {/*<Routes></Routes>*/}
          <Header />
          <NavBar />
          <main>
              {/*<Banner />*/}
          {/*<ColdSnacksContentList />*/}
          {/*<Portfolio />*/}
              <CardProduct />
      </main>
          <Footer />
      </div>
  );
}

export default App;
