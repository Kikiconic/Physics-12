import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata = {
  title: "Physics 12 Classroom",
  description: "Quick lessons and interactive electrostatics simulations for Physics 12."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
