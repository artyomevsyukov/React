import md5 from "crypto-js/md5"

const ts = Date.now().toString()
const publicKey = "ваш_publicKey"
const privateKey = "ваш_privateKey"

const hash = md5(ts + privateKey + publicKey).toString()

console.log({ ts, hash, apikey: publicKey })

class MarvelService {
  constructor() {
    this._apiBase = "http://gateway.marvel.com/v1/public"
    this._publicKey = "83dda609af9c0a72f8bc7d01495c3962"
    this._privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"
    this._ts = Date.now().toString() // Замените на ваш timestamp
    this._hash = md5(this._ts + this._privateKey + this._publicKey).toString() // Замените на ваш хеш
  }

  generateAuthParams() {
    const ts = Date.now().toString()
    const hash = md5(ts + this._privateKey + this._publicKey).toString()

    return { ts, apikey: this._publicKey, hash }
  }

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

  getAllComics = () => {
    return this.getResource("comics")
  }
}

export default MarvelService
