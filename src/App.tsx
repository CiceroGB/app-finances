import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransaction";

Modal.setAppElement('#root');



export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />


      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}



