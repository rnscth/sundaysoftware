export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="flex-1 bg-gradient-to-b from-gray-100 to-gray-300 page-enter">
      {children}
    </main>
  );
}