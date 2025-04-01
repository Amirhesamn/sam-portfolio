import { Button } from "./components/ui/button";

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            I craft clean, fast, and scalable frontends — with care.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Hi, I’m{" "}
            <span className="font-semibold text-indigo-600">Sam Neghabat</span>{" "}
            — a frontend engineer with 5+ years of experience, focused on
            building modern, UI-driven web apps using React, Next.js, and
            TypeScript.
          </p>
          <a href="mailto:amirhesamneghabat@gmail.com">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-base px-6 py-3 rounded-md shadow-lg">
              Work With Me
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I started my journey as a frontend developer driven by curiosity,
            passion for visual design, and a desire to build meaningful digital
            products. I’ve worked remotely with companies in Europe, especially
            Italy, and contributed to everything from dashboards to design
            systems.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
            <li>5+ years of real-world experience</li>
            <li>Specialized in React, Next.js, TypeScript</li>
            <li>Fast feature delivery without compromising code quality</li>
            <li>Great communication – I don’t ghost 😄</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "Web UI Development",
                desc: "Building responsive, accessible, pixel-perfect interfaces",
              },
              {
                title: "Design Systems",
                desc: "Creating scalable component libraries and UI kits",
              },
              {
                title: "Performance Tuning",
                desc: "Optimizing page speed, Lighthouse scores, and UX",
              },
              {
                title: "Frontend Consulting",
                desc: "Helping startups scale their UI/UX with confidence",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded shadow-sm hover:shadow-md border"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Clients love working with me because I’m fast, flexible, and easy to
            communicate with.
          </p>
          <p className="text-lg text-gray-700">
            I understand product goals, respect deadlines, and care about
            quality.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Build Something</h2>
          <p className="text-gray-700 text-lg mb-4">
            Reach out to me anytime via email or Telegram. Payments accepted in
            USDT / ETH.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:amirhesamneghabat@gmail.com"
              className="text-indigo-600 font-medium underline"
            >
              Email
            </a>
            <a
              href="https://t.me/hesamdev"
              className="text-indigo-600 font-medium underline"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        &copy; {new Date().getFullYear()} Sam Neghabat · All rights reserved.
      </footer>
    </main>
  );
}
