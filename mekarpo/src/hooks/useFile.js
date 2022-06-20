import { useState } from "react"

export const useFile = ( filename ) => {

    let file = require(`../data/${filename}`)
    file = file.map(data => {
        data.cost = data.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        let absolute_path = process.env.NODE_ENV === 'development' ? `${process.env.PUBLIC_URL}/assets` : '../../../../mekarpo/assets'
        data.img = `${absolute_path}/images/${data.img}`
        data.android_model = `${absolute_path}/android/${data.android_model}`
        data.ios_model = `${absolute_path}/ios/${data.ios_model}`
        return data
    })
    const [ data, setData ] = useState(file)
    return [ data, setData ]
    
}