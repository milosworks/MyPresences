import React from 'react'
import * as ReactDOM from 'react-dom'
import Setup from './Setup'

const ChangePage = () => {
	ReactDOM.render(<Setup />, document.getElementById('main'))
}

function Button() {
	return (
		<button
			type='button'
			className='button is-focused is-active is-large rounded-[7px] bg-[#343f56] text-white flex-col top-[10vh]'
			id='startbutton'
			onClick={ChangePage}
		>
			Start
		</button>
	)
}

export default Button
