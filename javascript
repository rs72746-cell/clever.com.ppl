document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    const messageArea = document.getElementById('messageArea');
    let clickCount = 0;

    actionButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
            messageArea.textContent = 'You clicked the button once!';
        } else {
            messageArea.textContent = `You clicked the button ${clickCount} times!`;
        }
        console.log('Button clicked:', clickCount);
    });
});
