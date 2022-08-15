const getImageUrl = (url: string) => {
    if (!url) {
      return null
    }
    return url
      .replace('http://', 'https://')
      .replace(/oss-cn-hongkong.aliyuncs.com/g, 'oss-accelerate.aliyuncs.com')
  }
  
  export default getImageUrl
  