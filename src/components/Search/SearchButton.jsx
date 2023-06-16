const SearchButton = ({ text, type }) => {
	return (
		<>
			<button
				className='w-full p-4 m-2 text-white bg-indigo-500 rounded-lg'
				type={type}
			>
				{text}
			</button>
		</>
	);
};

export default SearchButton;
