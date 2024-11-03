import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';

function ProdutoForm({ onProdutoAdded }) {
  const [produto, setProduto] = useState({ nome: '', precoCusto: '', precoVenda: '', quantidade: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (values) => {
    axios.post('http://localhost:5286/api/Produtos', values)
      .then(() => {
        message.success('Produto criado com sucesso!');
        setProduto({ nome: '', precoCusto: '', precoVenda: '', quantidade: '' });
        if (onProdutoAdded) {
          onProdutoAdded(); // Chama a função para atualizar a lista de produtos
        }
      })
      .catch(error => message.error('Erro ao criar produto, valores diferentes: ' + error.message));
  };

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      <Form.Item name="nome" label="Nome" rules={[{ required: true, message: 'Por favor, insira o nome do produto!' }]}>
        <Input value={produto.nome} onChange={handleChange} />
      </Form.Item>
      <Form.Item name="precoCusto" label="Preço de Custo" rules={[{ required: true, message: 'Por favor, insira o preço de custo!' }]}>
        <Input type="number" value={produto.precoCusto} onChange={handleChange} />
      </Form.Item>
      <Form.Item name="precoVenda" label="Preço de Venda" rules={[{ required: true, message: 'Por favor, insira o preço de venda!' }]}>
        <Input type="number" value={produto.precoVenda} onChange={handleChange} />
      </Form.Item>
      <Form.Item name="quantidade" label="Quantidade" rules={[{ required: true, message: 'Por favor, insira a quantidade!' }]}>
        <Input type="number" value={produto.quantidade} onChange={handleChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Adicionar</Button>
      </Form.Item>
    </Form>
  );
}

export default ProdutoForm;