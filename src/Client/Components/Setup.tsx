import React from 'react'

const InputText = (input: React.ChangeEvent<HTMLInputElement>) => {
	console.log(input.target.value)
	const Button = document.getElementById('skip-btn')

	if (input.target.value === '' && Button) {
		if (!Button.hasAttribute('disabled')) return

		Button.className = Button.className + ' is-focused'
		Button.removeAttribute('disabled')
	} else {
		if (!Button) return
		if (Button.hasAttribute('disabled')) return

		Button.className = Button.className.replace('is-focused', '')
		Button.setAttribute('disabled', '{true}')
	}
}

function Setup() {
	return (
		<div className='principal'>
			<div className='flex items-center justify-center main-font'>
				<h5 className='text-[40px]'>Write down your app ID</h5>
				<p className='text-[20px]'>
					<i> Skip to use default presence</i>
				</p>
			</div>

			<input
				type='text'
				placeholder='Application ID'
				className='input is-medium is-rounded w-[40vw] bg-[#343f56] text-white rounded-[10px] mb-[10px] placeholder-[#ffffff7c]::placeholder'
				id='appid'
				onChange={InputText}
			/>

			<div id='botones' className='flex justify-between'>
				<button
					className='button is-primary is-large is-focused bg-[#fc9404]'
					id='skip-btn'
				>
					Skip
				</button>

				<button
					className='button is-primary is-large is-focused bg-[#343f56]'
					id='continue-btn'
				>
					Continue
				</button>
			</div>
		</div>
	)
}

export default Setup

/*
			<img
				src='https://thumbs2.imgbox.com/5f/cd/nHMOAkfX_t.png'
				alt='How to get App ID'
			/>
*/
