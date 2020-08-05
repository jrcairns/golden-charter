# Golden Charter

Software Front-end (UI/UX) Developer role interview task

## Task

>Your task is to build a SPA (single page application) that connects to a REST API
and returns a list of images and the associated metadata. Visual design is not a
factor in this test. You may use any front-end framework that you are comfortable
with. All code should be well tested with documentation on how to run it locally.
Please deliver the final application as a git repository.
Documentation for the API can be found at https://picsum.photos and the
endpoint to use is located at https://picsum.photos/v2/list.
Screen One
This screen displays a list of 50 images with the following details:
>- Image author
>- A thumbnail of the image that’s 64 pixels wide
>- A button titled ‘Details’ that transitions to Screen Two
>Screen Two
>This screen displays a more detailed page for the specific image selected by
>clicking a ‘Details’ button on Screen One. It should display the following details:
>- A full width version of the image
>- Image author
>- Image dimensions
>- A button that downloads the image
>- A button that returns to Screen One

## Solution

### Libraries used:
- __TailwindCSS__ - rapid prototyping
- __Axios__ - HTTP requests
- __Vue.js__ - framework
- __Vue CLI__ - project setup/config

### How it works
Our ImageCardList component will fire off an API function to retrieve our 50 images:
```
export const getImages = (limit = 50) => {
    return axios(`https://picsum.photos/v2/list?limit=${limit}`)
}
```
Once our images are displayed, we have a Details button, which links to ``` /image/:id ```. Here we fire off another API function to get info on a single image, and display is accordingly:
```
export const getImageById = id => {
    return axios(`https://picsum.photos/id/${id}/info`)
}
```

## Improvements

- implement image lazyloading
- implement vuex, store the fetched images in the store, and then find the selected image, rather than firing off another HTTP request to /id/:id/info
- use a modal popout  to display information

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Run your unit tests
```
npm run test:unit
```
