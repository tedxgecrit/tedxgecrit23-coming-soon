import PoppinsFont from "@/components/PoppinsFont";
import "@/app/styles/globals.css";

export const metadata = {
  title: "TEDxGECRIT",
  description: "TEDxGECRIT at Kottayam, Kerala, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PoppinsFont />
      <body>{children}</body>
    </html>
  );
}
