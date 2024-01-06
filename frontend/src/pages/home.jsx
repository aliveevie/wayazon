import Slider from "../components/slider";
import SliderData from "../data/sliderImages";
import { AdvertOne } from "../components/advert1";
import { LondonUsed } from "../data/londonUsed";
import { Header } from "../components/header";
import { MobileHeader } from "../components/mobileHeader";
import { SmartWatch } from "../components/smartWatches";
import Footer from "../components/footer";


export function Home({mobile, handleMobile}){
    return (
        <>     
            <Header mobile={mobile} handleMobile={handleMobile} />
            {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}

            <SmartWatch />
            <LondonUsed />
            <Slider  slides={SliderData} />
            <AdvertOne />
            <Footer />
        </>
    )
}