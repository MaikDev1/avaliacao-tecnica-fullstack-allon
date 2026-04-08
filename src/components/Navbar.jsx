export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h2 className="text-3xl font-bold text-blue-600">Allon Smartconnector</h2>
        <div className="flex gap-8 text-lg">
          <a href="#" className="hover:text-blue-600 transition">Soluções</a>
          <a href="#" className="hover:text-blue-600 transition">Produtos</a>
          <a href="#" className="hover:text-blue-600 transition">Integrações</a>
        </div>
      </div>
    </nav>
  );
}