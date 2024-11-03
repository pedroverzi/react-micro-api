import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, message } from 'antd';

function ProdutoList({ onProdutoAdded }) {
  const [produtos, setProdutos] = useState([]);

  const fetchProdutos = () => {
    axios.get('http://localhost:5286/api/Produtos')
      .then(response => setProdutos(response.data))
      .catch(error => message.error('Erro ao buscar produtos: ' + error.message));
  };

  useEffect(() => {
    fetchProdutos(); // Chama a função para carregar os produtos quando o componente é montado
  }, []);

  useEffect(() => {
    if (onProdutoAdded) {
      fetchProdutos(); // Atualiza a lista sempre que onProdutoAdded for chamado
    }
  }, [onProdutoAdded]);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Preço de Custo',
      dataIndex: 'precoCusto',
      key: 'precoCusto',
    },
    {
      title: 'Preço de Venda',
      dataIndex: 'precoVenda',
      key: 'precoVenda',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
      key: 'quantidade',
    },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <Table dataSource={produtos} columns={columns} rowKey="id" />
    </div>
  );
}

export default ProdutoList;