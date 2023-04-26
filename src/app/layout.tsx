import Provider from "~/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Chat Skoop",
  description: "Let's Connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
