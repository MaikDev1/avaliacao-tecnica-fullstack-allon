export default function Cart({ cart }) {
  // calculo do valor total do carrinho
  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);

  return (
    <div className="fixed bottom-8 right-8 bg-white rounded-3xl shadow-2xl border border-gray-100 w-96 max-h-[75vh] overflow-hidden flex flex-col z-50">
      {/* cabeçalho do carrinho */}
      <div className="px-6 py-5 border-b flex items-center justify-between bg-gray-50 rounded-t-3xl">
        <h3 className="text-2xl font-semibold flex items-center gap-3">
          🛒 Carrinho 
          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-2xl font-medium">{cart.length}</span>
        </h3>
      </div>

      {/* lista de itens do carrinho */}
      <div className="flex-1 p-6 overflow-auto">
        {cart.length === 0 ? (
          <p className="text-gray-400 text-center py-12">Seu carrinho está vazio</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b last:border-none">
              <div>
                <p className="font-medium text-gray-900">{item.nome}</p>
                <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
              </div>
              <p className="font-semibold text-gray-900">
                R$ {(item.preco * item.quantity).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>

      {/* rodapé com total e botão */}
      <div className="p-6 border-t bg-white rounded-b-3xl">
        <div className="flex justify-between items-baseline text-3xl font-bold mb-6">
          <span className="text-gray-700">Total</span>
          <span className="text-emerald-600">R$ {total.toFixed(2)}</span>
        </div>
        
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 rounded-3xl text-xl font-semibold transition-all duration-300 shadow-lg">
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}