export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Tadiwanashe Murahwa</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
