import md5 from "crypto-js/md5"

class MarvelService {
  _apiBase = "http://gateway.marvel.com/v1/public"
  _apiKey = "83dda609af9c0a72f8bc7d01495c3962"
  _privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"
  params = { limit: 10, orderBy: "title" }

  // ts = Date.now().toString()
  // hash = md5(this.ts + this._privateKey + this._apiBase).toString()

  // getResource = async (url) => {
  //   let res = await fetch(url)

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  //   }

  //   return await res.json()
  // }

  // getAllCharacters = () => {
  //   return this.getResource(
  //     `${this._apiBase}characters?ts=${this.ts}&apikey=${this._apiKey}&hash=${this.hash}&limit=9&offset=210`
  //   )
  // }

  // getCharacter = (id) => {
  //   return this.getResource(
  //     `${this._apiBase}characters/${id}?ts=${this.ts}&apikey=${this._apiKey}&hash=${this.hash}`
  //   )
  // }

  generateAuthParams() {
    const ts = Date.now().toString()
    const hash = md5(ts + this._privateKey + this._apiKey).toString()

    return { ts, apikey: this._apiKey, hash }
  }

  paramsUrl() {}

  getResource = async (endpoint, params = {}) => {
    const url = new URL(`${this._apiBase}/${endpoint}`)

    // Добавляем параметры API + аутентификацию
    url.search = new URLSearchParams({
      ...this.generateAuthParams(),
      ...params,
    }).toString()

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    })

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getAllCharacters = async () => {
    const res = await this.getResource("characters", { limit: 9, offset: 210 })
    return res.data.results.map(this._transformCharacter)
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`characters/${id}`)

    return this._transformCharacter(res.data.results[0])
  }

  _transformCharacter = (char) => {
    const isImageUnavailable = char.thumbnail.path
      .toString()
      .includes("image_not_available")

    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
      isImageUnavailable,
    }
  }
}

export default MarvelService
