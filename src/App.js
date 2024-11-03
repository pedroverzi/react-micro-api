import React from 'react';
import ProdutoList from './components/ProdutoList';
import ProdutoForm from './components/ProdutoForm';

function App() {

  const handleProdutoAdded = () => {
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciamento de Produtos</h1>
      <ProdutoForm onProdutoAdded={handleProdutoAdded}/>
      <ProdutoList />
    </div>
  );
}

export default App;
