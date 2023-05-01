import "./globals.css";

export const metadata = {
  title: "CA DMV Chat Bot",
  description: "CA DMV Chat Bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
