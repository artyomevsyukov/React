import md5 from "crypto-js/md5"

const ts = Date.now().toString()
const publicKey = "83dda609af9c0a72f8bc7d01495c3962"
const privateKey = "b378f8770c78846ef38c67ddc3114d62cf283739"

export const hash = md5(ts + privateKey + publicKey).toString()

console.log({ ts, hash, apikey: publicKey })
