# React Example with Next.js

This project is a little application serving as a basic demonstration of working with front-end framework [React](https://react.dev/), specifically via [Next.js](https://nextjs.org/). It serves to implement the basic requirements outlined as part of the [React Challenge](https://changeis-code-challenge.s3.amazonaws.com/SimpleReactCodingChallenge.html) from [Changeis](https://changeis.com/).

## "My Image Library"

Using data returned by [Faker API](https://fakerapi.it/api/v1/images?_width=380), this application simply displays what it receives as a table for the user's review. The data includes a collection of images, each with a title and a description.

The data from the API is bound to a TypeScript model, then rendered in `ImageRow` components that are subsequently loaded as an `ImageTable` component.

One important deviation I've made from the assignment is modifying the image URLs on each object returned by Faker API. The reason I've done this was due to the randomly generated images rendering as identical due to caching. After reading the usage instructions from the site generating these images ([Lorem Picsum](https://picsum.photos/)), this can be alleviated by seeding the requests with a specific integer using the `random` parameter, which I decided to do so that the sample results would make more sense.

## Running the project

You can run the project via npm:

```bash
npm run dev
```

Once the web server is running, you can view the application at: [http://localhost:3000](http://localhost:3000)
