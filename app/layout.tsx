import "./globals.css";

export const metadata = {
  title: "Ali Yaacoobi | Portfolio",
  description: "Product manager portfolio website for Ali Yaacoobi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
