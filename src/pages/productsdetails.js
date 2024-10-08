import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../pages/cartcontext';
import './../styles/productsdetails.css';

const productList = [
    { id: 1, name: 'Pão francês', description: 'Um pão fresquinho e crocante.', price: 2.50 },
    { id: 2, name: 'Pão de forma', description: 'Pão macio ideal para o café da manhã.', price: 5.00 },
    { id: 3, name: 'Croissant', description: 'Delicioso croissant amanteigado.', price: 3.00 },
    { id: 4, name: 'Baguete', description: 'Baguete crocante com miolo macio.', price: 3.50 },
    { id: 5, name: 'Pão de queijo', description: 'Pão fofinho recheado com queijo derretido.', price: 4.00 },
    { id: 6, name: 'Bolo de chocolate', description: 'Bolo rico em chocolate para adoçar o seu dia.', price: 8.00 },
    { id: 7, name: 'Bolo de cenoura com cobertura de chocolate', description: 'Bolo de cenoura com uma deliciosa cobertura de chocolate.', price: 8.50 },
    { id: 8, name: 'Pão doce', description: 'Pão doce e fofinho, perfeito para um lanche.', price: 2.75 },
    { id: 9, name: 'Bolo de laranja', description: 'Bolo leve e aromático com sabor de laranja.', price: 7.50 },
    { id: 10, name: 'Pão de milho', description: 'Pão saboroso feito com milho fresco.', price: 3.75 },
    { id: 11, name: 'Rosquinhas caseiras', description: 'Rosquinhas frescas e crocantes, feitas com amor.', price: 3.25 },
    { id: 12, name: 'Pão australiano', description: 'Pão escuro e denso com sabor levemente adocicado.', price: 4.50 },
    { id: 13, name: 'Bolo de maçã e canela', description: 'Bolo suave com maçã e um toque de canela.', price: 8.00 },
    { id: 14, name: 'Pão de brioche', description: 'Pão doce e macio, ideal para qualquer ocasião.', price: 4.00 }
  ];
  
  



function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = productList.find((prod) => prod.id === parseInt(id, 10));

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} foi adicionado ao carrinho!`);
    };

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div className='produto'>
            <h2 className='nome-produto'>{product.name}</h2>
            <div className='imagem-produto'>Foto do produto</div>
            <p1>{product.description}</p1>
            <p2>Preço: R$ {product.price.toFixed(2)}</p2>
            <button onClick={handleAddToCart} id='produto-butao'>Adicionar ao Carrinho</button>
        </div>
    );
}

export default ProductDetails;