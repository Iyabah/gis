export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen text-gray-900">
        {children}
      </body>
    </html>
  );
}
