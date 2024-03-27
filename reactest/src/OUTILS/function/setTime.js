function simulateNetworkRequest(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export { simulateNetworkRequest };
