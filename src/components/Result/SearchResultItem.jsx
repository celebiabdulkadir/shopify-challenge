const SearchResultItem = ({ result, nominations, nominate }) => {
	return (
		<>
			<div className='flex justify-between items-center w-full '>
				{result.Title && (
					<>
						{' '}
						<span>{result.Title}</span>
						<button
							disabled={nominations.some(
								(nomination) => nomination.Title === result.Title
							)}
							className='bg-green-200  rounded px-4 py-2'
							onClick={() => {
								return nominate(result);
							}}
						>
							Nominate
						</button>
					</>
				)}

				{!result.Title && <span>{result}</span>}
			</div>
		</>
	);
};

export default SearchResultItem;
