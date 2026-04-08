export default function Cart({ cart }) {
  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);

  return (
    <div className="fixed bottom-8 right-8 bg-white shadow-2xl rounded-3xl p-6 w-96 max-h-[70vh] overflow-auto border border-gray-200 z-50">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🛒 Carrinho <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{cart.length}</span>
      </h3>
      
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div>
            <p className="font-medium">{item.nome}</p>
            <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
          </div>
          <p className="font-semibold">R$ {(item.preco * item.quantity).toFixed(2)}</p>
        </div>
      ))}

      <div className="mt-6 pt-6 border-t flex justify-between text-2xl font-bold">
        <span>Total</span>
        <span className="text-green-600">R$ {total.toFixed(2)}</span>
      </div>

      <button className="mt-8 w-full bg-green-600 text-white py-5 rounded-3xl text-xl font-semibold hover:bg-green-700 transition">
        Finalizar Pedido
      </button>
    </div>
  );
}