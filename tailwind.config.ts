import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
}

export default config
