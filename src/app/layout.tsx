import RootLayout from "@/components/RootLayout";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import CursorDot from "@/components/CursorDot";
import AuroraBackground from "@/components/ui/aurora-background";
import BackgroundBeams from "@/components/ui/background-beams";
export const metadata = {
  title: {
    template: "SyntaxLeap",
    default: "SyntaxLeap",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full text-base antialiased text-neutral-100">
      <body className="flex min-h-full flex-col">
        {/* <CursorFollower> */}
        {/* <AuroraBackground className={""}> */}
        <CursorDot />
        {/* <BackgroundBeams /> */}
        <RootLayout>{children}</RootLayout>
        {/* </AuroraBackground> */}
        {/* </CursorFollower> */}
      </body>
    </html>
  );
}
