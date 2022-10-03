async function fetchJson(url, options) {
    return await fetch(url, options)
    .then((response) => response.json())
}

export default fetchJson;