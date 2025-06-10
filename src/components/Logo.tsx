import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  invert?: boolean;
  href?: string;
  className?: string;
  fillOnHover?: boolean; // <-- declare it here
  children: React.ReactNode;
}

const Logo = ({
  invert,
  href,
  className,
  fillOnHover, // <-- destructure it
  children,
  ...props // now props no longer contains fillOnHover
}: LogoProps) => {
  // you can still *use* fillOnHover to toggle classes:
  const hoverClass = fillOnHover ? "hover:fill-blue-600" : "";

  className = clsx(
    className,
    invert
      ? "text-white hover:text-blue-600"
      : "text-black hover:text-blue-600",
    hoverClass
  );

  const inner = (
    <span className="relative flex items-center gap-2">
      <Image src="/logo.svg" alt="SyntaxLeap" width={80} height={80} />
      <span>{children}</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props} // fillOnHover is already removed
    >
      {inner}
    </h2>
  );
};

export default Logo;
