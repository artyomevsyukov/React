import md5 from "crypto-js/md5"

class MarvelService2 {
  constructor() {
    this._apiBase = "http://gateway.marvel.com/v1/public"
    this._publicKey = "83dda609af9c0a72f8bc7d01495c3962"
    this._privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"
    // this._ts = Date.now().toString() // Замените на ваш timestamp
    // this._hash = md5(this._ts + this._privateKey + this._publicKey).toString() // Замените на ваш хеш
    this.params = { limit: 10, orderBy: "title" }
  }

  // getResource1 = async (url, params = {}) => {
  //   const queryParams = new URLSearchParams({
  //     apikey: this._publicKey,
  //     ts: this._ts,
  //     hash: this._hash,
  //     ...params,
  //   }).toString()

  //   const fullUrl = `${url}?${queryParams}`

  //   let res = await fetch(fullUrl, {
  //     headers: {
  //       Accept: "*/*",
  //     },
  //   })

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${fullUrl}, status: ${res.status}`)
  //   }

  //   return await res.json()
  // }

  generateAuthParams() {
    const ts = Date.now().toString()
    const hash = md5(ts + this._privateKey + this._publicKey).toString()

    return { ts, apikey: this._publicKey, hash }
  }

  // getAllCharacters = (params = {}) => {
  //   return this.getResource(`${this.baseUrl}/comics`, params)
  // }

  getResource = async (endpoint, params = {}) => {
    const url = new URL(`${this._apiBase}/${endpoint}`)

    // Добавляем параметры API + аутентификацию
    url.search = new URLSearchParams({
      ...this.generateAuthParams(),
      ...params,
    }).toString()

    console.log("url: ", url)

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
    return this.getResource("characters", { limit: 20 })
    // return this.getResource("characters")
    // return this.getResource("Characters", this.params)
  }
}

export default MarvelService2
