import { Themes } from "@interfaces/texts/PrimaryTextProps"

const getTheme = (theme) => {
    return theme === Themes.Dark ? '--dark' : '--light'
}

export {
    getTheme,
} 