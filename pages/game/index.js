import React from 'react'
import styles from '../../styles/game.module.css'

const Game = () => {
  return (
    <div className="h-screen grid place-content-center" id={styles.bgimp}>
        <div className='w-[26rem] flex flex-col shadow border-none px-9 py-14 
        rounded-2xl backdrop-blur-md bg-gray-300/20 hover:bg-white/20 backdrop-opacity-95 hover:backdrop-opacity-100 transition ease-in-out delay-300'
        >
            <h1 className='text-2xl font-medium text-gray-200 mx-auto'>现在正在进行第 1 轮博弈</h1>
            <div className='mt-5 flex space-x-6 justify-center'>
                <button
                    className='shadow border p-8 py-6 rounded-full text-white decoration-0 font-bold w-1/3
										focus:outline-none transition ease-in-out delay-200 text-2xl
										h-30 border-none backdrop-opacity-80 bg-green-500  hover:bg-green-700 backdrop-blur-xl' 
                >
                    我要<br/>坦白
                </button>
                <button
                    className='shadow border p-8 py-6 rounded-full text-white decoration-0 font-bold w-1/3
										focus:outline-none transition ease-in-out delay-200 text-2xl
										h-30 border-none backdrop-opacity-80 bg-red-500  hover:bg-red-700 backdrop-blur-xl' 
                >
                    才不<br/>坦白
                </button>
            </div>

        </div>
    </div>
  )
}

export default Game