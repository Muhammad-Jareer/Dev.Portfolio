import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

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

// Desktop submenu items
const desktopMenu = [
  { to: "/skills", title: "Skills", description: "Technical and soft skills overview" },
  { to: "/experience", title: "Experience", description: "Professional work experience" },
  { to: "/education", title: "Education", description: "Academic qualifications" },
  { to: "/certifications", title: "Certifications", description: "Professional certifications" },
  { to: "/achievements", title: "Achievements", description: "Key accomplishments" },
  { to: "/languages", title: "Languages", description: "Language proficiency" },
];

export default function MainNavbar() {
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
            {/* ... desktop items ... */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/">Profile</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Skills & Experience</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                  {desktopMenu.map(item => (
                    <ListItem key={item.to} to={item.to} title={item.title}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                  <ListItem to="/interests" title="Interests">Hobbies and interests</ListItem>
                  <ListItem to="/testimonials" title="Testimonials">Client testimonials</ListItem>
                  <ListItem to="/platforms" title="Working Platforms">Professional platforms profile</ListItem>
                  <ListItem to="/contact" title="Contact">Get in touch</ListItem>
                  <ListItem to="/lifelogs" title="Frames & Feats">Life Logs</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE MENU + THEME + DOWNLOAD */}
        <div className="flex items-center gap-2">
          {/* Mobile Dialog */}
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

              <AnimatePresence>
                <Dialog.Content asChild forceMount>
                  <motion.nav
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                    className="fixed bottom-0 w-full bg-background p-6 rounded-t-2xl space-y-4 shadow-xl origin-bottom"
                  >
                    <MobileNavLink to="/">Profile</MobileNavLink>
                    <MobileNavLink to="/projects">Projects</MobileNavLink>

                    <MobileNavTrigger title="Skills & Experience">
                      {desktopMenu.map(item => (
                        <MobileNavLink key={item.to} to={item.to}>
                          {item.title}
                        </MobileNavLink>
                      ))}
                    </MobileNavTrigger>

                    <MobileNavTrigger title="More">
                      <MobileNavLink to="/interests">Interests</MobileNavLink>
                      <MobileNavLink to="/testimonials">Testimonials</MobileNavLink>
                      <MobileNavLink to="/platforms">Platforms</MobileNavLink>
                      <MobileNavLink to="/contact">Contact</MobileNavLink>
                      <MobileNavLink to="/lifelogs">Frames & Feats</MobileNavLink>
                    </MobileNavTrigger>

                    <Dialog.Close asChild>
                      <Button variant="ghost" className="mt-4 w-full">
                        Close
                      </Button>
                    </Dialog.Close>
                  </motion.nav>
                </Dialog.Content>
              </AnimatePresence>
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
}

// ------------ ListItem Component (for desktop submenu) ------------
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={to}
        ref={ref as any}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

// ------------ Mobile Helpers ------------
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
        <span className={cn("transform transition-transform", open && "rotate-180")}>▼</span>
      </button>
      {open && <div className="pl-4 space-y-1">{children}</div>}
    </div>
  );
};
