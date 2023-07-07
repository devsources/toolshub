import { IconBrandGithub } from '@tabler/icons-react'

export function Footer() {
	return (
		<footer className='px-4 py-12 bg-black'>
			<p className='max-w-fit mx-auto'>
				<a
					href='https://github.com/devsources/toolshub'
					className='flex gap-2 items-center text-center'
				>
					Visit ToolsHub in Github <IconBrandGithub />
				</a>
			</p>
		</footer>
	)
}
