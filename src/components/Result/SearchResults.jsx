import SearchResultItem from './SearchResultItem';

const SearchResults = ({ results, nominate, nominations }) => {
	return (
		<>
			{results?.map((result, index) => {
				return (
					<div className='bg-gray-200 mb-4 pl-2 mx-2 rounded' key={index}>
						<SearchResultItem
							result={result}
							nominations={nominations}
							nominate={nominate}
						/>
					</div>
				);
			})}
		</>
	);
};

export default SearchResults;
