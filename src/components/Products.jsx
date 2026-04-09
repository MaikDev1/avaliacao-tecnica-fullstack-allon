import { products } from '../data/products';

export default function Products({ onAddToCart }) {
  return (
    <div id="produtos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">Nossos Produtos</h2>
          <p className="text-gray-500 mt-3 text-xl">Escolha e adicione ao carrinho</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* faixa colorida no topo do card */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-violet-500"></div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-1">{product.nome}</h3>
                <p className="text-gray-400 text-lg">{product.categoria}</p>
                
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-emerald-600">R$</span>
                  <span className="text-6xl font-bold text-gray-900">{product.preco}</span>
                </div>

                {/* botão de adicionar */}
                <button 
                  onClick={() => onAddToCart(product)}
                  className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg font-semibold transition-all duration-300 group-hover:scale-105"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}