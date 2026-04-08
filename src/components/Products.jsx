import { products } from '../data/products';

export default function Products({ onAddToCart }) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-1">{product.nome}</h3>
              <p className="text-gray-500 mb-6">{product.categoria}</p>
              <p className="text-4xl font-bold text-green-600">R$ {product.preco}</p>
              <button 
                onClick={() => onAddToCart(product)}
                className="mt-8 w-full bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}