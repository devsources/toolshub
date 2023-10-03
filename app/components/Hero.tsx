export function Hero() {
	return (
		<section className='grid py-64 place-content-center gap-14'>
			<h1 className='font-extrabold text-center text-primary dark:text-white text-7xl'>
				<span className='text-tertiary'>Everything</span> you need{' '}
				<span className='text-tertiary'>here</span>
			</h1>
			<h2 className='mx-auto text-2xl font-semibold text-center text-primary dark:text-white max-w-prose'>
				The best resources for <span className='text-secondary'>developers</span>,{' '}
				<span className='text-secondary'>designers</span> and{' '}
				<span className='text-secondary'>creatives</span>.
			</h2>
		</section>
	)
}
