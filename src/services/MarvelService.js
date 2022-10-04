class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=778847f5f231c973c47b211b4be7342d';
  
        getResource = async(url) => {
            let res = await fetch(url);
  
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
  
        return await res.json();
    }
  
    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    }
  
    getAllCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
  }
  
  export default MarvelService;