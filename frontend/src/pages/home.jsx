import Slider from "../components/slider";
import SliderData from "../data/sliderImages";
import { AdvertOne } from "../components/advert1";
import { Phones } from "./phones";
import { Accessories } from "./smartWatch";
import { Login } from "../components/login";


export function Home(){
    return (
        <>
            <Slider  slides={SliderData} />
            <AdvertOne />
            <Accessories />
            <Phones />
            <Login />
           
        </>
    )
}