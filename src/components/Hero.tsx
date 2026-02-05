export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Hello, I'm Qendrim Beka.</h2>
        <p className="text-gray-700 mb-4">
          I'm a 3rd year Computing Science student at the University of Alberta.
        </p>
        <p className="text-gray-700 mb-4">
          I build products and compete in hackathons. Built Philo (25K+ users, $24K ARR), won natHACKS 2024, and currently work at NAT on multi-agent LLM research while leading Index Competitive.
        </p>
        <a 
          href="https://calendly.com/beka-qendrim1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
        >
          Book a call
        </a>
      </div>
    </section>
  );
}
