# The Challenge 

Create a webpage that can search OMDB for movies, and allow the user to save their favorite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished.

## Requirements 

- Simple to use interface.
- The ability to search the OMDB API and return a list of movies that show at least the title, release year, and a button to nominate them.
- Search results should only be of movies.
- Updates to the search terms should update the result list.
- If a movie has been nominated already, it's button should be disabled within in search results.
- Nominated movies should move to their own "Nomination List".
- Movies in the nomination list should be able to be removed.
- Display a banner when the user has 5 nominations.

### Provided Reference Image 

![Example image](./example.png)

Example of one of the people who tried this: [Live example](https://the-shoppies-gyk.netlify.app/)
# Live
[![Netlify Status](https://api.netlify.com/api/v1/badges/05406161-c451-49e9-8399-78ef2d9f212f/deploy-status)](https://shopify-challange-recoded.netlify.app/)

# Instructions: 
- Use `scss` instead of css if you going with `react-bootstrap`
- You can use `postcss` if you are going with another library that uses something like `tailwind`

Your project hierarchy should look something similar to this:

```
.
├── app
	├── components
		├── ProgressBar
			├── ProgressBar.jsx
			├── ProgressBar.scss
	├── about
		├── page.jsx
    		├── ContactForm.jsx
```

- All dependencies inside the `package.json` should be used in the project.
- It's recommended to use Yarn to install the packages.

## Software requirements:

- You should have prettier installed and make sure your code is well formatted before committing it.
- You should have eslint installed and make sure your code is following the [Airbnb guidelines](https://github.com/airbnb/javascript/tree/master/react) before committing.
- You should install [Husky](https://github.com/typicode/husky) to make sure that your code gets checked before you commit anything. 
- For Styling use Tailwind, Styled Components, React-Bootstrap, or Material UI.
- Follow the [Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- Follow the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)
- This project should be deployed to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- For state management use the Context API & useReducer hooks. 
- For any data fetching use TanStack Query and use [Axios](https://github.com/axios/axios).

[Helpful article about prettier and eslint]([https://www.mkapica.com/react-eslint/](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier))

### Framework

[It is best to use NextJS for this](https://nextjs.org/docs/getting-started/installation)


