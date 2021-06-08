import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faWindowMinimize,
	faTimes,
	faSquare
} from '@fortawesome/free-solid-svg-icons'

function Titlebar() {
	return (
		<div id='menu-bar' className='flex justify-center items-center'>
			<div
				className='h-full main-font flex justify-center items-center mt-[6px] ml-[6px]'
				role='menu'
			>
				<h5 className='main-font bg-[#f4e4cc]'>My</h5>
				<h5 className='main-font bg-[#fc9404'>Presences</h5>
			</div>

			<div className='h-full main-font flex justify-center items-center'>
				<button
					className='h-full p-[15px] outline-none border-opacity-0 bg-transparent no-drag hover:bg-[rgba(221, 221, 221, 0.281)]'
					id='minimize-btn'
					style={{}}
				>
					<FontAwesomeIcon
						icon={faWindowMinimize}
						className='text-white'
					/>
				</button>

				<button
					className='h-full p-[15px] outline-none border-opacity-0 bg-transparent no-drag hover:bg-[rgba(221, 221, 221, 0.281)]'
					id='max-unmax-btn'
				>
					<FontAwesomeIcon icon={faSquare} className='text-white' />
				</button>

				<button
					className='h-full p-[15px] outline-none border-opacity-0 bg-transparent no-drag hover:bg-[rgb(255, 0, 0)]'
					id='close-btn'
				>
					<FontAwesomeIcon icon={faTimes} className='text-white' />
				</button>
			</div>
		</div>
	)
}

export default Titlebar
