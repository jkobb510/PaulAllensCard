        const audio = document.getElementById('welcomeAudio');
        const fadeInDiv = document.getElementById('fadeInDiv');
const blackOverlay = document.getElementById('blackOverlay');

        // Function to handle button click: play audio and show fade-in div
        function handleButtonClick(button) {
            // Play audio
            audio.play().catch(error => {
                console.log('Autoplay failed, user interaction needed:', error);
            });
            
            // Show the fade-in div with a smooth transition
            button.style.display = 'none';


            // Remove event listeners to prevent multiple triggers
            document.removeEventListener('click', handleButtonClick);
            document.removeEventListener('keypress', handleButtonClick);
            triggerFadeToBlack();
                setTimeout(() => {
                    fadeInDiv.classList.add('visible');
                    }, 3000);
    
        }

function triggerFadeToBlack() {
    blackOverlay.classList.add('fade-black');
}