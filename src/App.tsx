import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { useState } from "react";

import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('root');

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      >
        <h2>Cadastar transação</h2>
      </Modal>


      <Dashboard />
      <GlobalStyle />
    </>
  );
}



