# Diversity tool visualiser

This is a component of [OurDiversity](https://github.com/Doteveryone/diversity-tool-microsite) microsite.

It takes a CSV file and visualises the data contained within it.

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It requires client-side JavaScript to display the visualisations.

## Including the visualiser in OurDiversity microsite

Build the production-ready version by running:

```
npm run build
```

Copy the contents of the `build` directory to the `visualise-the-data` directory of the [microsite](https://github.com/Doteveryone/diversity-tool-microsite/tree/master/visualise-the-data).


### Development

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The contents of the `_build` directory can be included in the main project directory.
