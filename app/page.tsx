
export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <header className="mb-16">
        <h1 className="text-5xl font-extrabold mb-2">Sam Neghabat</h1>
        <p className="text-xl text-gray-600">Senior Frontend Engineer | React, Next.js, TypeScript</p>
        <p className="mt-1 text-sm text-gray-500">Based in Tehran, Iran · Open to Remote Work · Crypto-friendly (USDT/ETH)</p>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg">
          I’m a frontend engineer with 5+ years of experience building scalable, high-performance web apps using React, Next.js,
          and TypeScript. I specialize in rapid feature delivery, UI/UX-driven development, and clean code. I'm passionate about
          working with startups and teams looking to move fast without compromising quality.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg">
          <li>React.js, Next.js, TypeScript, JavaScript, HTML/CSS</li>
          <li>Tailwind CSS, Shadcn, Material UI</li>
          <li>React Query, Zustand, Redux</li>
          <li>Jest, Vitest, React Testing Library</li>
          <li>TurboRepo, Monorepo Architecture, Micro Frontends</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
        <p className="text-gray-700 text-lg mb-2">Live demos coming soon — real-world projects with clean code and elegant UI.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Hire Me</h2>
        <p className="text-gray-700 text-lg mb-2">
          Let’s work together! You can reach me via <a href="mailto:amirhesamneghabat@gmail.com" className="text-blue-500 underline">email</a>
          or contact me directly on <a href="https://t.me/hesamdev" className="text-blue-500 underline">Telegram</a>.
        </p>
        <p className="text-sm text-gray-500">Payment options: Crypto (USDT/ERC20 or ETH)</p>
      </section>
    </div>
  );
}
