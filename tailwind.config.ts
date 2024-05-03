import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			xxs: {
				max: '489.98px'
			},
			ssm: {
				max: '566.98px'
			},
			mmd: {
				max: '767.98px'
			},
			llg: {
				max: '991.98px'
			},
			mxl: {
				max: '1199.98px'
			},
			m2xl: {
				max: '1439.98px'
			},
			xs: '489.98px',
			sm: '566.98px',
			md: '767.98px',
			lg: '991.98px',
			xl: '1199.98px',
			'2xl': '1439.98px'
		},
		extend: {
			maxWidth: {
				'8xl': '87.5rem'
			},
			containers: {
				'8xl': '90rem' // 1440px
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries')
	]
}
export default config
