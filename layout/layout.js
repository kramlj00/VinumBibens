import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export const siteTitle = "Andrijić House";

export default function Layout({ children, activeTab }) {
  return (
    <>
      <header>
        <Navbar activeTab={activeTab}/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
