import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-9 object-contain" />
          <div className="leading-tight">
            <p className="font-display text-base text-foreground">Founder's Counsel & Co.</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Advocates & Legal Advisors
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Founder's Counsel & Co.
        </p>
      </div>
    </footer>
  );
}
