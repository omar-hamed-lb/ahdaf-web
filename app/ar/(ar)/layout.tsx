import "./globals.css";
import Header from "@components/header_ar/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="body-ar">
      <Header />
      {children}
    </div>
  );
}
