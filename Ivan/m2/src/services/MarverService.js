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

  getResource = async (endpoint, params = {}) => {
    const url = new URL(`${this._apiBase}/${endpoint}`)

    // Добавляем параметры API + аутентификацию
    url.search = new URLSearchParams({
      ...this.generateAuthParams(),
      ...params,
    }).toString()

    // console.log("url: ", url)

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

  getAllComics = () => {
    return this.getResource("comics", { limit: 20, orderBy: "title" })
    // return this.getResource("comics")
    // return this.getResource("comics", this.params)
  }
  getAllCharacters = () => {
    return this.getResource("characters", { limit: 9, offset: 210 })
    // return this.getResource("characters")
    // return this.getResource("Characters", this.params)
  }
  getCharacter = (id) => {
    return this.getResource(`characters/${id}`)
    // return this.getResource("characters")
    // return this.getResource("Characters", this.params)
  }
}

export default MarvelService
