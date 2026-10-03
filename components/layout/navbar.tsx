"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Classes", href: "/classes" },
  { label: "Flashcards", href: "/flashcards" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-full border border-slate-200/70 bg-white/80 px-3 py-2 shadow-[0_20px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-3"
        >
          <Link href="/" className="flex items-center gap-3 rounded-full px-2 py-1.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-sm">
              B
            </div>
            <div className="leading-none">
              <div className="font-heading text-2xl font-extrabold text-ink">BrightLane</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Montessori
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex">
            <Button variant="primary" size="md" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open menu" className="h-10 w-10 rounded-full p-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed right-3 top-3 z-50 h-[calc(100vh-1.5rem)] w-[min(88vw,22rem)] rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">
                        B
                      </div>
                      <div>
                        <div className="font-heading text-xl font-extrabold text-ink">BrightLane</div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          Montessori
                        </div>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="sm" aria-label="Close menu" className="h-9 w-9 rounded-full p-0">
                        <X className="h-4 w-4" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isActive =
                        item.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.href);

                      return (
                        <Dialog.Close asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "rounded-2xl px-3 py-3 text-base font-semibold transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-slate-700 hover:bg-slate-100 hover:text-ink",
                            )}
                          >
                            {item.label}
                          </Link>
                        </Dialog.Close>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <Button variant="primary" size="lg" className="w-full" asChild>
                      <Link href="/admissions">Apply Now</Link>
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  );
}
