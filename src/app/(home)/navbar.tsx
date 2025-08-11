"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "!bg-muted hover:bg-muted"
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex border-b justify-between font-medium">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.href} href={item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex items-center">
        <Button
          variant={"secondary"}
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-transparent border-none hover:bg-pink-400 transition-colors text-lg"
          asChild
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-pink-400 border-none transition-colors text-lg"
          asChild
        >
          <Link href="/sign-up">Start selling</Link>
        </Button>
        <ModeToggle />
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant={"ghost"}
          className="size-12 border-transparent"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
