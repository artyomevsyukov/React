import { useHttp } from "../hooks/http.hook"
import md5 from "crypto-js/md5"

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp()

  const _apiBase = "http://gateway.marvel.com/v1/public"
  const _apiKey = "83dda609af9c0a72f8bc7d01495c3962"
  const _privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"
  const _baseOffset = 210

  const generateAuthParams = () => {
    const ts = Date.now().toString()
    const hash = md5(ts + _privateKey + _apiKey).toString()
    return { ts, apikey: _apiKey, hash }
  }

  const getResource = async (endpoint, params = {}) => {
    const url = new URL(`${_apiBase}/${endpoint}`)
    url.search = new URLSearchParams({
      ...generateAuthParams(),
      ...params,
    }).toString()

    return await request(url) // Используем хук useHttp для выполнения запроса
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

  const getAllComics = async (offset = _baseOffset) => {
    const res = await getResource("comics", {
      limit: 12,
      offset: offset,
    })
    return res.data.results.map(_transformComics)
    // return res.data.results
  }

  const getComic = async (id) => {
    const res = await getResource(`comics/${id}`)
    return _transformComics(res.data.results[0])
  }

  const _transformComics = (item) => {
    const isImageUnavailable = item.thumbnail.path
      .toString()
      .includes("image_not_available")

    return {
      id: item.id,
      title: item.title,
      description: item.description || "There is no description",
      pageCount: item.pageCount
        ? `${item.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      language: item.textObjects[0]?.language || "en-us",
      url: item.urls[0].url,
      price: item.prices[0].price
        ? `${item.prices[0].price}$`
        : "not available",
      isImageUnavailable,
    }
  }

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getAllComics,
    getComic,
  }
}

export default useMarvelService
