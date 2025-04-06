import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedSection } from "@/components/animated-section";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 place-items-center">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Sam Neghabat</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Button asChild size="sm" className="btn-primary">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 self-center">
        <AnimatedSection
          className="container py-24 sm:py-32"
          animation="animate-fade-in"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 hero-content">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary">Sam Neghabat</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Senior Frontend Developer specializing in building exceptional
                  digital experiences
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="btn-primary group">
                  <Link href="#projects">
                    View My Work{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="transition-all hover:bg-primary/10"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center hero-image">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-primary/20 profile-image">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sam Neghabat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="about"
          className="container py-24 sm:py-32 border-t"
          animation="animate-slide-up"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a passionate frontend developer with over 8 years of
              experience building modern web applications. I specialize in
              React, Next.js, and modern frontend technologies, with a focus on
              creating performant, accessible, and visually appealing user
              interfaces.
            </p>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              When I'm not coding, you can find me hiking in the mountains,
              reading science fiction, or experimenting with new cooking
              recipes. I believe in continuous learning and sharing knowledge
              with the developer community.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="skills"
          className="container py-24 sm:py-32 border-t"
          animation="animate-slide-up"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I work with a variety of modern technologies to create exceptional
              digital experiences.
            </p>

            <Tabs defaultValue="frontend" className="w-full max-w-[800px] mt-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Redux",
                    "Tailwind CSS",
                    "Styled Components",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm skill-item animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frameworks" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Next.js",
                    "Gatsby",
                    "Vue.js",
                    "Nuxt.js",
                    "Angular",
                    "Express",
                    "NestJS",
                    "Remix",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm skill-item animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Figma",
                    "Docker",
                    "Jest",
                    "Cypress",
                    "Webpack",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm skill-item animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "Accessibility",
                    "Performance",
                    "SEO",
                    "Responsive Design",
                    "UI/UX",
                    "GraphQL",
                    "REST APIs",
                    "Agile",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 rounded-lg border bg-card text-card-foreground shadow-sm skill-item animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="projects"
          className="container py-24 sm:py-32 border-t"
          animation="animate-slide-up"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of the projects I've worked on recently.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and payment integration.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Dashboard UI",
                description:
                  "A responsive admin dashboard with data visualization, user management, and real-time analytics.",
                tags: ["React", "Redux", "D3.js", "Styled Components"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Social Media App",
                description:
                  "A social networking application with real-time messaging, post sharing, and user profiles.",
                tags: ["React", "Firebase", "Socket.io", "Tailwind CSS"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Portfolio Generator",
                description:
                  "A tool that helps developers create beautiful portfolios without writing code.",
                tags: ["Next.js", "TypeScript", "Shadcn UI", "Prisma"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Recipe Finder",
                description:
                  "An application that helps users find recipes based on ingredients they have at home.",
                tags: ["React", "GraphQL", "Apollo", "CSS Modules"],
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Weather App",
                description:
                  "A weather application with location detection, forecasts, and beautiful visualizations.",
                tags: [
                  "React",
                  "OpenWeather API",
                  "Geolocation",
                  "Framer Motion",
                ],
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group project-card animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover project-card-image"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="testimonials"
          className="container py-24 sm:py-32 border-t"
          animation="animate-slide-up"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              What People <span className="text-primary">Say</span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Testimonials from clients and colleagues.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                quote:
                  "Sam is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
                author: "Jane Smith",
                role: "CTO, Tech Innovations",
              },
              {
                quote:
                  "Working with Sam was a pleasure. He understood our requirements perfectly and delivered a solution that exceeded our expectations.",
                author: "Michael Johnson",
                role: "Product Manager, Digital Solutions",
              },
              {
                quote:
                  "Sam's technical expertise and creativity make him a valuable asset to any team. He's not just a developer, but a true problem solver.",
                author: "Emily Chen",
                role: "Lead Designer, Creative Studio",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 skill-item animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="contact"
          className="container py-24 sm:py-32 border-t"
          animation="animate-slide-up"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Interested in working together? Feel free to reach out!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12 max-w-[58rem] mx-auto">
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                <Mail className="h-5 w-5 text-primary" />
                <span>sam.neghabat@example.com</span>
              </div>
              <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                <Linkedin className="h-5 w-5 text-primary" />
                <span>linkedin.com/in/samneghabat</span>
              </div>
              <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                <Github className="h-5 w-5 text-primary" />
                <span>github.com/samneghabat</span>
              </div>
              <div className="flex items-center gap-2 transition-transform hover:translate-x-1">
                <Twitter className="h-5 w-5 text-primary" />
                <span>twitter.com/samneghabat</span>
              </div>
            </div>

            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="text-xl font-bold">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:ring-primary"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus-visible:ring-primary"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full btn-primary">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="border-t py-6 md:py-8 animate-fade-in">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sam Neghabat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
