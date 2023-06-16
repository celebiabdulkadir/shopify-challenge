'use client';

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '@/components/Search/SearchBar';
import SearchButton from '@/components/Search/SearchButton';
import SearchResults from '@/components/Result/SearchResults';
import Nominations from '@/components/Nominations/Nominations';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Home() {
	// const [search, setSearch] = useState('');
	const [results, setResults] = useState();

	const [nominations, setNominations] = useState([]);
	// const api_key = process.env.API_KEY;

	const schema = yup.object().shape({
		search: yup
			.string()
			.trim('No leading/trailing whitepaces allowed')
			.required('Please enter movie or series name!'),
	});
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });

	watch('search');

	const onSubmit = (data) => {
		searchMoviesAndSeries('s', data.search);
		reset();
	};

	const nominate = (result) => {
		if (nominations.length === 5)
			return alert('You have reached the maximum number of nominations');
		setNominations([...nominations, result]);
	};

	const searchMoviesAndSeries = async (type, query) => {
		try {
			const { data } = await axios.get(
				`https://www.omdbapi.com/?apikey=83d5d697&&${type}=${query}`
			);

			if (data.Response === 'False') {
				setResults([data.Error]);
				return;
			}

			setResults(data.Search);

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
								<form onSubmit={handleSubmit(onSubmit)}>
									<SearchBar errors={errors} register={register} />
									<SearchButton text='Search' type='submit' />
								</form>
							</div>
						</div>
						<div className='flex flex-col items-center justify-between w-full'>
							<div className='flex flex-col  justify-between w-full'>
								<h1 className='text-4xl font-bold text-center text-gray-800'>
									Results
								</h1>

								<SearchResults
									results={results}
									nominations={nominations}
									nominate={nominate}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex  flex-col justify-start w-full gap-6 mt-4 lg:mt-0'>
					<div className='text-4xl font-bold text-center text-gray-800'>
						NOMINATIONS {nominations.length}/5
					</div>
					<Nominations
						nominations={nominations}
						setNominations={setNominations}
					/>
				</div>
			</div>
		</main>
	);
}
