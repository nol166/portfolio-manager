import { writeFile, copyFile } from 'fs'

export const makeFile = (
    content:
        | string
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array
        | Float32Array
        | Float64Array
        | DataView
) => {
    return new Promise((resolve, reject) => {
        writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created!',
            })
        })
    })
}

export const copyStyle = () => {
    return new Promise((res, rej) => {
        copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                rej(err)
            }

            res({
                ok: true,
                message: 'Style copied!',
            })
        })
    })
}
