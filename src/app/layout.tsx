import RootLayout from "@/components/RootLayout";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import CursorDot from "@/components/CursorDot";

export const metadata = {
  title: {
    template: "SyntaxLeap",
    default: "SyntaxLeap",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        {/* <CursorFollower> */}
        <CursorDot />
        <RootLayout>{children}</RootLayout>
        {/* </CursorFollower> */}
      </body>
    </html>
  );
}
