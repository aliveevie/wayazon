import Slider from "../components/slider"
import SliderData from "../data/sliderImages"
import { AdvertOne } from "../components/advert1"



export function Home(){
    return (
        <>
            <Slider  slides={SliderData} />
            <AdvertOne />
        </>
    )
}