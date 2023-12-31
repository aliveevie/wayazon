import { Header } from "../components/header";
import { MobileHeader } from "../components/mobileHeader";
import { SmartWatch } from "../components/smartWatches";
import Footer from "../components/footer";

export function Accessories({mobile, handleMobile}){

    return (
      <>
        <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
      
      <SmartWatch />
      <Footer />
    </>
    )

   
}