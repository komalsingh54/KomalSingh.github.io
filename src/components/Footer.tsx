export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Komal Singh. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
