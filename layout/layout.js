import Navbar from "../components/Navbar/Navbar";

export const siteTitle = "Andrijić House";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
