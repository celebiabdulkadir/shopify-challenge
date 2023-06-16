import NominationItem from '@/components/Nominations/NominationItem';
const Nominations = ({ nominations, setNominations }) => {
	return (
		<div>
			{nominations?.map((nomination, index) => {
				return (
					<div className='bg-green-200 mb-4 rounded px-2' key={index}>
						<NominationItem
							nominations={nominations}
							nomination={nomination}
							setNominations={setNominations}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Nominations;
