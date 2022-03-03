
const iconsPath = require.context('../assets/icons', true)

export const getIconImages = iconName => {
    return iconsPath( `./${ iconName }.svg` )
}