import Slider from "../components/slider";
import SliderData from "../data/sliderImages";
import { AdvertOne } from "../components/advert1";
import { LondonUsed } from "../data/londonUsed";

import { Accessories } from "./smartWatch";
import { Login } from "../components/login";
import { Header } from "../components/header";
import { MobileHeader } from "../components/mobileHeader";
import { SmartWatch } from "../components/smartWatches";


export function Home({mobile, handleMobile}){
    return (
        <>
              
      <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}

            <SmartWatch />
            <LondonUsed />
            <Slider  slides={SliderData} />
            <AdvertOne />
        </>
    )
}