import { CatComponent } from "../components/categories"
import { Header } from "../components/header"
import { MobileHeader } from "../components/mobileHeader"
import Footer from "../components/footer"

export function Categories({mobile, handleMobile}){
    return (
        <>
             <Header mobile={mobile} handleMobile={handleMobile} />
        {mobile && <MobileHeader  mobile={mobile} handleMobile={handleMobile} />}
      
            <CatComponent />
            <Footer />
        </>
    )
}