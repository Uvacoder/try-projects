/* global tailwind */

import colors from 'https://cdn.skypack.dev/tailwindcss/colors?min'

tailwind.config = {
    theme: {
        fontFamily: {
            sans: ['Lexend', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#ef233c',
                secondary: '#1c1917',
                gray: colors.neutral,
            },
        },
    },
}
