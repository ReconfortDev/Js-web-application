export async function fetchBuildTools() {
    const response = await fetch('../assets/build-tools.json');
    return response.json();
}