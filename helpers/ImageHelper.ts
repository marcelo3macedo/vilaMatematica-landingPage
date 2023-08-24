import step1 from "@assets/images/steps/step1.png"
import step2 from "@assets/images/steps/step2.png"
import step3 from "@assets/images/steps/step3.png"
import step4 from "@assets/images/steps/step4.png"
import analyse from "@assets/images/functionality/analyse.png"
import create from "@assets/images/functionality/create.png"
import integrate from "@assets/images/functionality/integrate.png"
import memorize from "@assets/images/functionality/memorize.png"
import search from "@assets/images/functionality/search.png"
import share from "@assets/images/functionality/share.png"

const recoverSrc = image => {
    return images[image] ? images[image].src : null
}

const images = {
    step1,
    step2,
    step3,
    step4,
    analyse,
    create,
    integrate,
    memorize,
    search,
    share
}

export {
    recoverSrc,
} 