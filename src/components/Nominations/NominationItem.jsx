const NominationItem = ({ setNominations, nomination, nominations }) => {
	return (
		<div className='flex justify-between '>
			{' '}
			<div>
				{' '}
				<p>{nomination.Title}</p>{' '}
				<p>
					{nomination.Year} - <span>{nomination.Type}</span>{' '}
					<img
						className='w-8 h-8 object-fit inline-block mb-4'
						src={nomination.Poster}
						alt=''
					/>
				</p>
			</div>
			<button
				onClick={() => {
					const updatedNominations = nominations.filter(
						(n) => n.Title !== nomination.Title
					);
					setNominations(updatedNominations);
				}}
			>
				x
			</button>
		</div>
	);
};

export default NominationItem;
