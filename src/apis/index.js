import axios from 'axios'

const KEY = 'AIzaSyC_VIw2BbGk1g9S0NxZvKIKqPKazd2iOB4'

const youtube = axios.create({baseURL: 'https://www.googleapis.com/youtube/v3'})

const params ={
  part: 'snippet',
  maxResult: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  return await youtube.get('/videos',{
    params: {
      ...params,
      chart: 'mostPopular'

    }
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos',{
    params: {
      ...params,
      id
    }
  })
}

export const fetchRelatedData = async (id) => {
  return await youtube.get('/search',{
    params: {
      ...params,
      relatedToId: id
    }
  })
}