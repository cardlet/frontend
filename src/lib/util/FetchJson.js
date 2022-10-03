async function fetchJson(url, options) {
    return await fetch("http://localhost:8000" + url, options)
    .then((response) => response.json())
}

export default fetchJson;