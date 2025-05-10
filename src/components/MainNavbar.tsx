import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const MainNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          Portfolio<span className="text-primary">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* ...your existing desktop items here */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE MENU TOGGLE + THEME + DOWNLOAD */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:scale-110 transition-transform"
                aria-label="Open menu"
              >
                <HiMenu size={24} />
              </Button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content
                asChild
                className="fixed bottom-0 w-full origin-bottom"
              >
                <motion.nav
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-background p-6 rounded-t-2xl space-y-4 shadow-xl"
                >
                  {/* replicate your nav links in a vertical list */}
                  <MobileNavLink to="/">Profile</MobileNavLink>
                  <MobileNavLink to="/projects">Projects</MobileNavLink>
                  <MobileNavTrigger title="Skills & Experience">
                    <MobileNavLink to="/skills">Skills</MobileNavLink>
                    <MobileNavLink to="/experience">Experience</MobileNavLink>
                    <MobileNavLink to="/education">Education</MobileNavLink>
                    <MobileNavLink to="/certifications">Certifications</MobileNavLink>
                    <MobileNavLink to="/achievements">Achievements</MobileNavLink>
                    <MobileNavLink to="/languages">Languages</MobileNavLink>
                  </MobileNavTrigger>
                  <MobileNavTrigger title="More">
                    <MobileNavLink to="/interests">Interests</MobileNavLink>
                    <MobileNavLink to="/testimonials">Testimonials</MobileNavLink>
                    <MobileNavLink to="/platforms">Platforms</MobileNavLink>
                    <MobileNavLink to="/contact">Contact</MobileNavLink>
                    <MobileNavLink to="/lifelogs">Frames & Feats</MobileNavLink>
                  </MobileNavTrigger>

                  {/* Close button */}
                  <Dialog.Close asChild>
                    <Button variant="ghost" className="mt-4 w-full">
                      Close
                    </Button>
                  </Dialog.Close>
                </motion.nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>

          {/* Download resume */}
          <Button className="hidden md:flex text-white">
            <FaDownload />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;

/* ------------------------------------------------ */
/* Helper components for mobile links and triggers */
/* ------------------------------------------------ */

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
  >
    {children}
  </Link>
);

const MobileNavTrigger: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition"
      >
        {title}
        <span className={cn("transform transition-transform", open && "rotate-180")}>
          ▼
        </span>
      </button>
      {open && <div className="pl-4 space-y-1">{children}</div>}
    </div>
  );
};
