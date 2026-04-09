export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* ícone simples da Allon */}
          <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">A</div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Allon Smartconnector</h1>
        </div>
        
        <div className="flex items-center gap-9 text-base font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">Soluções</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Produtos</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Integrações</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Preços</a>
        </div>
      </div>
    </nav>
  );
}