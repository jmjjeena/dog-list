# dog-list
Practice for TA

 We will be building a single page app using react and node that will allow users select a dog breed and see all the images for that breed.

###API doc (don't look at this until you read through all the instructions)
https://dog.ceo/dog-api/documentation/

## Level 1:
- [ ] Allow the user to select a breed by clicking a button
- [ ] On click display randomly selected image from dogImages array

## Level 2:
- [ ] Allow the user to "Like" an image.
- [ ] Show a button called "Likes" which will show all the images that have been liked by the user

## Level 3:
- [ ] Get a list of all dog breeds from GET to https://dog.ceo/api/breeds/list/all
- [ ] Give the user an option to select from the list
- [ ] Get all the images for that breed by a GET to https://dog.ceo/api/breed/{insert_image_name}/images

## Level 4:
- [ ] prompt the user to create a username and save the likes information to a database
- [ ] the likes button should be rewritten to get the likes from the database, by prompting the user to enter a username if the username doesn't exist