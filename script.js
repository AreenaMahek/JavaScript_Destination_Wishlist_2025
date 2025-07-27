
(function(){
    'use strict';

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit); 

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const destination_name = event.target.elements['destination_name'].value;
        const destination_location = event.target.elements['destination_location'].value;
        const destination_photo = event.target.elements['destination_photo'].value;
        const destination_description = event.target.elements['destination_description'].value;

        for(let i = 0; i < detailsForm.length; i++) { //clear all form fields after submission
            detailsForm.elements[i].value = '';
        }

        // create a card here...
        const destCard = createDestinationCard(destination_name, destination_location, destination_photo, destination_description);

        const wishListContainer =  document.getElementById('destination_container');

        if(wishListContainer.children.length === 0) { //if empty
            document.getElementById('title').innerHTML = 'My Wish List';
        }

        // add the card to the container
        //document.querySelector('#destination_container').appendChild(destCard);
        wishListContainer.appendChild(destCard);
    }


    // create a card function

    function createDestinationCard(name, location, photo, description) {
        
        // Create a card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create and set the image element
        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const constantPhotoUrl = "images/signpost.jpg"; // default photo URL
        if(photo.length === 0){ //url not provided
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photo);
        }

        card.appendChild(img);

        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create and set the title, subtitle, and description
        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement('h4');
        cardSubTitle.innerText = 'Destination Location: ' + location;
        cardBody.appendChild(cardSubTitle);

        if (description.length !== 0){
            const cardDescription = document.createElement('p');
            cardDescription.className = 'card-text';
            cardDescription.innerText = description;
            cardBody.appendChild(cardDescription);
        }


        // Create and set the delete button
        const cardDeleteButton = document.createElement('button');
        cardDeleteButton.innerHTML = 'Remove';
        cardBody.appendChild(cardDeleteButton);
        cardDeleteButton.addEventListener('click', removeDestination);

        //add the entire cardBody to the card
        card.appendChild(cardBody);

        return card;
    }


    // Remove destination function
    function removeDestination(event){
        //locate the parent of parent that is card and remove it
        const card = event.target.parentElement.parentElement;
        card.remove();
    }

})();

