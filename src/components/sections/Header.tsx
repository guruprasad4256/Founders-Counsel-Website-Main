import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Founder's Counsel & Co." className="h-12 w-12 object-contain" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold text-foreground">
              Founder's Counsel
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Advocates & Legal Advisors
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `transition hover:text-foreground ${isActive ? "text-foreground" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Button
          asChild
          variant="outline"
          className="border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a href="mailto:hello@founderscounsel.com">Get in Touch</a>
        </Button>
      </div>
    </header>
  );
}
