export class Reddit {
    constructor() {
        this.name = "Reddit API";
        // Enable later:
        // this.apiRoot = "https://www.reddit.com/r";
        this.apiRoot = "/mocks";
    }

    async fetchPostsPreviews(subredditName, filter = '') {
        // Enable later:
        const fetchLink = `${this.apiRoot}/${subredditName}${filter}.json`;
        console.log('fetchLink in reddit.js', fetchLink);
        // await fetch(fetchLink)
        return fetch(fetchLink)

        // await fetch(`${this.apiRoot}/${subredditName}/${filter}.json`)

        // await fetch(`${this.apiRoot}/${subredditName}.json`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
    }
}