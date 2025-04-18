// Event delegation for tiles
document.querySelector('.grid').addEventListener('click', (e) => {
    const tile = e.target.closest('.tile');
    if (tile) {
        const label = tile.getAttribute('aria-label');
        alert(`Navigating to ${label}...`);
    }
});