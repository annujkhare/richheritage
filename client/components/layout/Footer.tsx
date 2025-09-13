import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-transparent to-muted/40">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg">Bharat Heritage</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-prose">
            A dynamic, interactive platform celebrating India's diverse culture,
            traditions, and heritage. Built for students, travelers,
            researchers, and culture enthusiasts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/map" className="hover:text-primary">
                Interactive Map
              </Link>
            </li>
            <li>
              <Link to="/library" className="hover:text-primary">
                Multimedia Library
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-primary">
                Educational Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/forum" className="hover:text-primary">
                Forum
              </Link>
            </li>
            <li>
              <a
                href="https://incredibleindia.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Incredible India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Bharat Heritage. All rights reserved.
          </p>
          <p>
            Built with ❤ for culture.{" "}
            <a href="/admin" className="hover:text-primary">
              Admin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
