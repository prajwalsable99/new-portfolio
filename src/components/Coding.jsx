import React from 'react'
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.png'
const Coding = () => {
  return (
	<>
{/* <h1 className='text-center text-yellow-600 bg-gray-600 pt-2 text-2xl'>Questions solved</h1> */}
<section className="flex items-center justify-center w-screen  text-gray-800 p-10 bg-gray-600">
	{/* <!-- Component Start --> */}
	<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
		
		{/* <!-- Tile 1 --> */}
		<div className="flex items-center p-4 bg-white rounded">
			<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
				<img src={c1}alt="" />
			</div>
			<div className="flex-grow flex flex-col ml-4">
				<span className="text-xl font-bold">Geeks  for Geeks</span>
				<div className="flex items-center justify-between">
					
					<span className="text-green-500 text-sm font-semibold ml-2">400+ questions</span>
				</div>
			</div>
		</div>
		
		{/* <!-- Tile 2 --> */}
		<div className="flex items-center p-4 bg-white rounded">
			<div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
				<img src={c2} alt="" />
			</div>
			<div className="flex-grow flex flex-col ml-4">
				<span className="text-xl font-bold">HackerRank</span>
				<div className="flex items-center justify-between">
					
					<span className="text-green-500 text-sm font-semibold ml-2">300+ questions </span>
				</div>
			</div>
		</div>
		
		{/* <!-- Tile 3 --> */}
		<div className="flex items-center p-4 bg-white rounded">
			<div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
				<img src={c3} alt="" />
			</div>
			<div className="flex-grow flex flex-col ml-4">
				<span className="text-xl font-bold">Leetcode</span>
				<div className="flex items-center justify-between">
					
					<span className="text-green-500 text-sm font-semibold ml-2">200+ questions</span>
				</div>
			</div>
		</div>
		
	</div>
	{/* <!-- Component End  --> */}

</section>
	</>
  )
}

export default Coding