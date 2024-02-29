const createButtons = () => {
  const groupButtons = document.querySelector('[data-name="group_buttons"]')

  if (!groupButtons) return

  const listLabels = [
    { name: 'GitHub', link: 'https://github.com/srGuardia' },
    { name: 'Frontend Mentor', link: '' },
    {
      name: 'Linkedin',
      link: '',
    },
    { name: 'Twitter', link: '' },
    { name: 'Instagram', link: '' },
  ]

  listLabels.forEach((item) => {
    const button = document.createElement('a')

    button.className =
      'w-full bg-secondary rounded-md py-2 hover:bg-off-black cursor-pointer'

    if (item?.link) {
      button.href = item?.link
      button.target = '_blank'
    } else {
      const customClass = button.className.replace(
        'cursor-pointer',
        'cursor-default'
      )
      button.className += customClass.concat(' opacity-35')
    }

    button.innerHTML = `<span class='font-semibold text-white text-xs'>${item?.name}</span>`

    groupButtons.append(button)
  })
}

const init = () => {
  createButtons()

  tailwind.config = {
    theme: {
      extend: {
        backgroundColor: {
          white: 'var(--WHITE)',
          secondary: 'var(--GREY)',
          'dark-grey': 'var(--DARK-GREY)',
          'off-black': 'var(--OFF-BLACK)',
          green: 'var(--GREEN)',
        },
        colors: {
          primary: 'var(--GREEN)',
          secondary: 'var(--GREY)',
        },
      },
    },
  }
}

init()
