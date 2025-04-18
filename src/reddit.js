export class Reddit {
    constructor() {
        this.name = "Reddit API";
        // Enable later:
        // this.apiRoot = "https://www.reddit.com/r";
        this.apiRoot = "/mocks";
    }
    // Fetch article previews:
    async fetchArticlePreviews(subredditName = 'popular', filter = '') {
    // async fetchArticlePreviews(subredditName, filter = '') {

        const fetchLink = `${this.apiRoot}/${subredditName}${filter}.json`;
        console.log('fetchLink in reddit.js', fetchLink);
        return fetch(fetchLink)

        // return fetch(`${this.apiRoot}/${subredditName}/${filter}.json`)

        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
    }

    // Fetch selected article:
    async fetchSelectedArticle(permalink) {

        const fetchLink = `${this.apiRoot}/${permalink}.json`;
        console.log('fetchLink for current article', fetchLink);
        return fetch(fetchLink)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
    }

    // Search:
    async search(queryString) {
        const searchUrl = `${this.apiRoot}/popular/search.json?q=${queryString}`;
        console.log('searchUrl', searchUrl);
        return fetch(searchUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
    }
}