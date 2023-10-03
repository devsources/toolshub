'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { IconBrandGithub, IconMoon, IconSunHigh } from '@tabler/icons-react'

export function Header() {
	const { setTheme, theme } = useTheme()
	const [theming, setTheming] = useState('dark')

	const handleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'

		setTheme(newTheme)
		setTheming(newTheme)
	}

	return (
		<header className='sticky top-0 z-10 border-b border-gray-800 backdrop-blur-md'>
			<nav className='flex items-center justify-between h-16 p-4 mx-auto max-w-7xl'>
				<h1 className='font-bold text-primary dark:text-white'>
					<Link href='/'>ToolsHub.</Link>
				</h1>

				<ul className='flex items-center gap-2 text-primary dark:text-white'>
					<li>
						<Link href='https://github.com/devsources/toolshub'>
							<IconBrandGithub />
						</Link>
					</li>
					<li>
						<button className='flex self-center p-0.5 rounded-md' onClick={handleTheme}>
							{theming === 'dark' ? <IconSunHigh /> : <IconMoon />}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}
