import React from 'react';
import './../styles/home.css';
function Home() {
  return (
    <div className='home-container'>
      <h2 className='home-title'>Bem-vindo à Padaria do Pão Quente</h2>
      <p className='home-description'>Aqui na Padaria do Pão Quente, nosso compromisso é oferecer a você o melhor em pães frescos, 
        bolos caseiros e delícias artesanais. Com uma receita de tradição que passa de geração em geração, usamos apenas ingredientes 
        de alta qualidade para criar produtos que trazem o sabor e o aroma de um lar acolhedor. Venha nos visitar e experimente nossos 
        pães quentinhos, croissants irresistíveis e bolos que são verdadeiras obras de arte. Na Padaria do Pão Quente, cada mordida é uma 
        experiência que faz você se sentir em casa.</p>
      <div className='products-carousel'>

      </div>
    </div>
  );
}

export default Home;
