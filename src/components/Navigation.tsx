export default function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6 text-sm">
        <a href="/" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="/experience" className="text-gray-600 hover:text-gray-900">Experience</a>
        <a href="/projects" className="text-gray-600 hover:text-gray-900">Projects</a>
        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  );
}
