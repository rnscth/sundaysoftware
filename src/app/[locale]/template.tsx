export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex-1 bg-gradient-to-b from-fog to-ash page-enter focus:outline-none"
    >
      {children}
    </main>
  );
}