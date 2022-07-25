import MD5 from "crypto-js/md5"

function encryptPass(pass){
    return MD5(pass).toString()
}

export { encryptPass }