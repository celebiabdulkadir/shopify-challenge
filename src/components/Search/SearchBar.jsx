'use client';
const SearchBar = ({ register, errors }) => {
	return (
		<>
			<div className='w-96'>
				<input
					{...register('search')}
					className='w-full p-4 m-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
					type='text'
					placeholder='Search Movies and Series'
				/>
				<p className={`text-red-600 ml-2  ${errors.search ? '' : 'invisible'}`}>
					{errors.search?.message || 'Placeholder'}
				</p>
			</div>
		</>
	);
};
export default SearchBar;
