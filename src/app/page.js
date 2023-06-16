'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState();

	const [nominations, setNominations] = useState([]);
	// const api_key = process.env.API_KEY;
	const handleOnClick = async () => {
		if (search.trim() === '' || search === null || search === undefined)
			return alert('Please enter a search term');
		await searchMoviesAndSeries('s', search);
	};

	const nominate = (result) => {
		if (nominations.length === 5)
			return alert('You have reached the maximum number of nominations');
		setNominations([...nominations, result]);
	};

	const searchMoviesAndSeries = async (type, query) => {
		try {
			const { data } = await axios.get(
				`https://www.omdbapi.com/?apikey=83d5d697&${type}=${query}`
			);

			if (data.Response === 'False') {
				setResults([data.Error]);
				return;
			}

			setResults(data.Search);
			setSearch('');
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<main
			className='flex min-h-screen flex-col items-center justify-between my-6 
    '
		>
			<div className='flex flex-col lg:flex-row'>
				<div className='z-10 w-full max-w-5xl items-start justify-between font-mono text-sm flex  flex-col lg:flex-row '>
					<div className='lg:mr-12 w-full'>
						{' '}
						<div className='flex flex-col items-center justify-between w-full'>
							<h1 className='text-4xl font-bold text-center text-gray-800'>
								Search Movies and Series
							</h1>
							<div className='flex flex-col items-center justify-between w-full'>
								<input
									value={search}
									className='w-full p-4 m-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
									type='text'
									placeholder='Search Movies and Series'
									onChange={(e) => setSearch(e.target.value)}
								/>
								<button
									className='w-full p-4 m-2 text-white bg-indigo-500 rounded-lg'
									onClick={handleOnClick}
								>
									Search
								</button>
							</div>
						</div>
						<div className='flex flex-col items-center justify-between w-full'>
							<div className='flex flex-col  justify-between w-full'>
								<h1 className='text-4xl font-bold text-center text-gray-800'>
									Results
								</h1>

								{results?.map((result, index) => {
									return (
										<div className='bg-gray-200 mb-4 pl-2 rounded' key={index}>
											<h1 className='flex justify-between items-center w-full '>
												{result.Title && <span>{result.Title}</span>}

												{result.Title && (
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
												)}
												{!result.Title && <span>{result}</span>}
											</h1>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className='flex  flex-col justify-start w-full gap-6 mt-4 lg:mt-0'>
					<div className='text-4xl font-bold text-center text-gray-800'>
						NOMINATIONS {nominations.length}/5
					</div>
					<div>
						{nominations?.map((nomination, index) => {
							return (
								<div className='bg-green-200 mb-4 rounded px-2' key={index}>
									<div className='flex justify-between'>
										{' '}
										<div>
											{' '}
											<p>{nomination.Title}</p>{' '}
											<p>
												{nomination.Year} - <span>{nomination.Type}</span>
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
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
