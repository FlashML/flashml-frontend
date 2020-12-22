# FlashML React Frontend

## Start the development server
1. `yarn install`
2. `yarn start run`
3. Open to `localhost:3000`

## TODO
1. Model Playground
 - Layers should be clickable to add additional configuration (kernel size, dropout rate, etc...). We should be able to do this by creating a `getFormJson` function that returns a json of the elements of that object. We can then iterate through the elements and create the form accordingly. 
 ```
 {
   "attributes": [
     {
        name: "Kernel Size",
        fields: [{
          type: "Integer",
          name: "height", 
          value: "32" // this is the default or current value of that object
        }, ...]
     }
     ...
   ]
 }
 ```
 The other option is to do custom forms for each type of layer with an if statement.. this is definitely more jank
 - Drag, Drop, Remove layers from playground. This is already there since we are maintaining a list
2. Code Generation (MVP)
We will create a toJson function that will serialize the data and send it to the flask server to be processed
4. Redux for maintaining model and configurations 
Redux is really only helpful for state management; persistence will need to be done via localstorage and by later adding funcitonality to download the model as a json and then re-upload it to the platfom 
6. Dimensionality checking 
Built in model debugging, this is pretty easy to do on change of any model layer attribute . 
8. Download and upload current config/model for later changes

## Feature Requests
1. Bidirecitonal code <-> GUI generation

