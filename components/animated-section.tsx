"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  animation?: string
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  id,
  className,
  animation = "animate-fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    once,
    animation,
  })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        className,
        isVisible ? animation : "opacity-0",
        "transition-all duration-1000 ease-out",
        delay > 0 ? `delay-${delay}` : "",
      )}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </section>
  )
}

