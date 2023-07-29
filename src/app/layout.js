import PoppinsFont from "@/components/PoppinsFont";
import "./globals.css";

export const metadata = {
  title: "RIT | TEDx",
  description: "RIT TEDx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body>{children}</body>
    </html>
  );
}
