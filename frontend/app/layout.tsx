import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-slate-100">
        {children}
      </body>
    </html>
  );
}
