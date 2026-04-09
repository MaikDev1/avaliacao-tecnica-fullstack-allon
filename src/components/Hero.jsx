export default function Hero() {
  // função pra rolar até a seção de produtos quando clicar no botão
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
         Bem vindo ! Integre seu banco com qualquer API
        </h1>
        <p className="text-2xl mb-10 max-w-2xl mx-auto">
          Smartconnector - A plataforma de integração visual Allon
        </p>
        
        {/* botão que rola pra baixo */}
        <button 
          onClick={scrollToProducts}
          className="bg-white text-blue-700 px-10 py-5 rounded-2xl text-2xl font-semibold hover:bg-gray-100 transition"
        >
          Ver o Fluxo de Integração
        </button>
      </div>
    </div>
  );
}