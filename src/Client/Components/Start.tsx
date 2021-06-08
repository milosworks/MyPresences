import React, { Fragment } from 'react'
import Button from './StartButton'
import TitleBar from './Titlebar'

function Start() {
	return (
		<Fragment>
			<TitleBar />
			<div className='bg-[#343f56]'>
				<div className='w-[100vw] h-[96.3vh] bg-[#f54748]' id='main'>
					<div className='w-full h-full flex items-center justify-center flex-col relative bottom-[9vh]'>
						<img
							src='https://images2.imgbox.com/07/83/dOA2KpUJ_o.png'
							alt='MyPresencesLOGO'
							className='w-1/2 h-1/2'
						/>
						<Button />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Start
