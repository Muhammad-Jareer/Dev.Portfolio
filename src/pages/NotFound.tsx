
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingDecorativeCircle from "@/components/FloatingDecorativeCircle";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/95 p-6 relative">
      <FloatingDecorativeCircle className="absolute top-24 left-10 w-64 h-64 opacity-30" />
      <FloatingDecorativeCircle className="absolute bottom-24 right-10 w-48 h-48 opacity-20" />
      
      <div className="text-center max-w-md backdrop-blur-sm bg-card/70 p-8 rounded-2xl border border-border shadow-lg">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl md:text-2xl text-foreground mb-6">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="hover:scale-105 transition-transform">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
