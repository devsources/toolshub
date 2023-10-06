import { Metadata } from 'next'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'

const poppinsFont = Poppins({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata: Metadata = {
	title: 'ToolsHub',
	description:
		'Aumenta tu productividad con nuestras herramientas profesionales. Impulsa tu éxito en el desarrollo y el diseño web.',
	viewport: {
		width: 'device-width',
		initialScale: 1
	},
	icons: [
		// Light mode icons
		{
			rel: 'manifest',
			url: '/site-light.webmanifest',
			media: '(prefers-color-scheme: light)'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon-light.png',
			media: '(prefers-color-scheme: light)'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32-light.png',
			media: '(prefers-color-scheme: light)'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16-light.png',
			media: '(prefers-color-scheme: light)'
		},
		{
			rel: 'mask-icon',
			url: '/safari-pinned-tab-light.svg',
			media: '(prefers-color-scheme: light)'
		},

		// Dark mode icons
		{
			rel: 'manifest',
			url: '/site-dark.webmanifest',
			media: '(prefers-color-scheme: dark)'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon-dark.png',
			media: '(prefers-color-scheme: dark)'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32-dark.png',
			media: '(prefers-color-scheme: dark)'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16-dark.png',
			media: '(prefers-color-scheme: dark)'
		}
	]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppinsFont.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					// enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}

					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
