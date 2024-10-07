let loadingInterval;

self.addEventListener('message', (event) => {
    if (event.data === 'START_LOADING') {
        startLoading();
    }
});

function startLoading() {
    let progress = 0;
    loadingInterval = setInterval(() => {
        progress += 1;
        self.postMessage({ type: 'LOADING_PROGRESS', progress });

        if (progress >= 100) {
            clearInterval(loadingInterval);
            self.postMessage({ type: 'LOADING_COMPLETE' });
        }
    }, 20); // Adjusted to match the original 20ms interval
}