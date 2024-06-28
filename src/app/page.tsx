
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import Information from "@/components/Information/Information";
import Feadback from "@/components/Feadback/Feadback";
import Footer from "@/components/Footer/Footer";
import Search from "@/components/Search/Search";

export default function Home() {
  return (
   <>
   
    <Navbar />
    <Main />
    <Search />
    <Information />
    <Feadback />
    <Footer />

   </>
  );
}
