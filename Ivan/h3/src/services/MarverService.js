import md5 from "crypto-js/md5"

const useMarvelService = () => {
  const _apiBase = "http://gateway.marvel.com/v1/public"
  const _apiKey = "83dda609af9c0a72f8bc7d01495c3962"
  const _privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"
  const params = { limit: 10, orderBy: "title" }
  const _baseOffset = 210

  const generateAuthParams = () => {
    const ts = Date.now().toString()
    const hash = md5(ts + _privateKey + _apiKey).toString()

    return { ts, apikey: _apiKey, hash }
  }

  const getResource = async (endpoint, params = {}) => {
    const url = new URL(`${_apiBase}/${endpoint}`)

    // Добавляем параметры API + аутентификацию
    url.search = new URLSearchParams({
      ...generateAuthParams(),
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

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await getResource("characters", {
      limit: 9,
      offset: offset,
    })
    return res.data.results.map(_transformCharacter)
  }

  const getCharacter = async (id) => {
    const res = await getResource(`characters/${id}`)
    return _transformCharacter(res.data.results[0])
  }

  const _transformCharacter = (char) => {
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

  return {
    // loading,
    // error,
    // clearError,
    getAllCharacters,
    getCharacter,
    // getAllComics,
    // getComics,
  }
}

export default useMarvelService
