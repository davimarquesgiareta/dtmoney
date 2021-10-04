import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { NewTransactionModal } from './Components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider} from '../src/hooks/useTransactions';

Modal.setAppElement("#root") //questao so de acessibilidade, relaxa

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return (
      <TransactionsProvider>      
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard/>
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal} 
        />
        <GlobalStyle/>
      </TransactionsProvider>
   
  );
}

export default App;
