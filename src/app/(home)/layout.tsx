import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-[#f4f4f0] dark:bg-background">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
