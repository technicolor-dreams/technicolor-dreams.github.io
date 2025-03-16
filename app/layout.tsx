import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            maxWidth: "75rem",
            margin: "0 auto",
            paddingRight: "3rem",
            paddingLeft: "3rem",
          }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
