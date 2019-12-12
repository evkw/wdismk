module.exports = {
  theme: {
    container: {},
    extend: {},
    customForms: theme => ({
      default: {
        select: {
          lineHeight: theme('lineHeight.snug'),
          borderColor: 'transparent',
          boxShadow: theme('boxShadow.default'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          '&:focus': {
            backgroundColor: theme('colors.gray.600'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>'

        },
        checkbox: {
          height: '1.5em',
          width: '1.5em',
          size: '1.5em',
          backgroundColor: theme('colors.gray.900'),
          borderColor: 'transparent',
          '&:focus': {
            backgroundColor: theme('colors.gray.700'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
        },
        radio: {
          height: '1.5em',
          width: '1.5em',
          size: '1.5em',
          backgroundColor: theme('colors.gray.900'),
          borderColor: 'transparent',
          '&:focus': {
            backgroundColor: theme('colors.gray.700'),
            borderColor: 'transparent',
            boxShadow: 'none'
          },
        }
      }
    })
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ]
}
