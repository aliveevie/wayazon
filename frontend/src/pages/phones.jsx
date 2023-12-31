import { Header } from "../components/header";
import { MobileHeader } from "../components/mobileHeader";
import { LondonUsed } from "../data/londonUsed";
import Footer from "../components/footer";

export function Phones({mobile, handleMobile}){
   return (
   <>
     <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
        <LondonUsed />
         <Footer />
   </>
   )
}