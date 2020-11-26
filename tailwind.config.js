module.exports = {
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          '@apply px-4 mx-auto': {},
          maxWidth: theme('screens.sm')
        }
      },{
        '.container-navbar' : {
          '@apply px-4 mx-auto': {},
          maxWidth: theme('screens.md')
        }
      })
    }
  ]
}
