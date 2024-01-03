import Slider from "../components/slider";
import SliderData from "../data/sliderImages";
import { Phones } from "../components/phone";
import { AdvertOne } from "../components/advert1";

import { Accessories } from "./smartWatch";
import { Login } from "../components/login";
import { Header } from "../components/header";
import { MobileHeader } from "../components/mobileHeader";


export function Home({mobile, handleMobile}){
    return (
        <>
              
      <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
            <Slider  slides={SliderData} />
            <AdvertOne />
            <Accessories />
            <Phones />
           
           
        </>
    )
}