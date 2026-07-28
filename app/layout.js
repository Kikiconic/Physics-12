import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Electrostatics Lab 12",
  description: "Quick lessons and interactive electrostatics simulations for Physics 12."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
