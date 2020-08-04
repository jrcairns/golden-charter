import axios from 'axios'

export const getImages = (limit = 50) => {
    return axios(`https://picsum.photos/v2/list?limit=${limit}`)
}

export const getImageById = id => {
    return axios(`https://picsum.photos/id/${id}/info`)
}