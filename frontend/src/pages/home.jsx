import Slider from "../components/slider"
import SliderData from "../data/sliderImages"


export function Home(){
    return (
        <>
            <Slider  slides={SliderData} />
        </>
    )
}