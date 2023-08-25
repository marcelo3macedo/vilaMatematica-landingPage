import { useTranslation } from "react-multi-lang"
import logo from "@assets/images/logo.png"

const pages = {
    ['/'] : 'home',
    ['/about'] : 'about',
    ['/privacypolicy'] : 'privacypolicy',
    ['/termsofuse'] : 'termsofuse',
    ['/contact'] : 'contact'
}

const generateSeo = route => {
    const t = useTranslation()
    const title = getTitle(t, route)
    const description = getDescription(t, route)
    const keywords = getKeywords(t)
    const url = `${process.env.NEXT_PUBLIC_WEB_ENDPOINT}${route}`
    const name = t('application.name')
    const logo = getLogo()

    return {
        name,
        title,
        description,
        keywords,
        url,
        logo
    }
}

const getLogo = () => {
    return logo.src
}

const getTitle = (t, route) => {
    const title = pages[route]
        ? t(`application.pages.${pages[route]}.title`)
        : t('application.title')

    return `${t('application.name')} - ${title}`
}

const getDescription = (t, route) => {
    return t(`application.pages.${pages[route]}.description`)
}

const getKeywords = (t) => {
    return t(`application.keywords`)
}

export {
    generateSeo,
} 