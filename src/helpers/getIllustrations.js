
const iconsPath = require.context('../assets/illustrations', true)

export const getIllustrations = imgName => {
    return iconsPath( `./${ imgName }.png` )
}