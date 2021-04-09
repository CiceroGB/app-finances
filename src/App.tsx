import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";



export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />


      <Dashboard />
      <GlobalStyle />
    </>
  );
}



