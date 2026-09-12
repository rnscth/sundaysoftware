export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex-1 bg-gradient-to-b from-shell to-ash-warm page-enter focus:outline-none"
    >
      {children}
    </main>
  );
}