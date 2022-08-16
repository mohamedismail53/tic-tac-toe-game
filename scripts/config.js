function openOverlayConfiguration(event) {
    EditedPressedButton = +event.target.dataset.playerid;
    console.log(EditedPressedButton);
    backdrop.style.display = 'block';
    playerConfigOverlay.style.display = 'block';
}

function cancelPlayerOverlay() {
    backdrop.style.display = 'none';
    playerConfigOverlay.style.display = 'none';

    errorElement.innerText = '';
    inputElement.value = '';
    inputElement.classList.remove('input-error-style');
    labelElement.classList.remove('label-error-style');
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerName = formData.get('playername').trim();

    if (!playerName) {
        errorElement.innerText = 'please enter a valid name';
        inputElement.classList.add('input-error-style');
        labelElement.classList.add('label-error-style');
        return;
    }

    if (EditedPressedButton === 1) {
        player1NameElement.innerHTML = playerName;
        player1Name = playerName;
    } else {
        player2NameElement.innerHTML = playerName;
        player2Name = playerName;
    }
    cancelPlayerOverlay();
}