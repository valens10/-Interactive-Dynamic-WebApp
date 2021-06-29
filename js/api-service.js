const api_url = 'https://jsonplaceholder.typicode.com/'

async function getUsersApi() {
    try {
        const response = await fetch(api_url + 'users');
        return await response.json();
    } catch (error) {
        console.error(error)
    };
};

async function getUserPostsApi(endpoint) {
    try {
        const response = await fetch(api_url + endpoint);
        return await response.json();
    } catch (error) {
        console.error(error)
    };
};