import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';

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
        <Link to="/" className="font-bold text-xl">
          Portfolio<span className="text-primary">.</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
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
                  <ListItem to="/skills" title="Skills">
                    Technical and soft skills overview
                  </ListItem>
                  <ListItem to="/experience" title="Experience">
                    Professional work experience
                  </ListItem>
                  <ListItem to="/education" title="Education">
                    Academic qualifications
                  </ListItem>
                  <ListItem to="/certifications" title="Certifications">
                    Professional certifications
                  </ListItem>
                  <ListItem to="/achievements" title="Achievements">
                    Key accomplishments
                  </ListItem>
                  <ListItem to="/languages" title="Languages">
                    Language proficiency
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                  <ListItem to="/interests" title="Interests">
                    Hobbies and interests
                  </ListItem>
                  <ListItem to="/testimonials" title="Testimonials">
                    Client testimonials
                  </ListItem>
                  <ListItem to="/platforms" title="Working Platforms">
                    Professional platforms profile
                  </ListItem>
                  <ListItem to="/contact" title="Contact">
                    Get in touch
                  </ListItem>
                  <ListItem to="/lifelogs" title="Frames & Feats">
                    Life Logs
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:scale-110 transition-transform"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>

          <Button className="md:flex text-white">
            <FaDownload />
            <span className="sr-only">Download Resume</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
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
  );
});
ListItem.displayName = "ListItem";

export default MainNavbar;
