import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
