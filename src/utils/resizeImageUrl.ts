const resizeImageUrl = (url: any, resizeParams: any) => {
  if (!url) {
    return url
  }
  // ?x-oss-process=image/resize,w_500,limit_0
  if (resizeParams.width) {
    return `${url}?x-oss-process=image/resize,w_${resizeParams.width * 2},limit_1`
  } else if (resizeParams.height) {
    return `${url}?x-oss-process=image/resize,w_${resizeParams.height * 2},limit_1`
  }
  return url
}

export default resizeImageUrl
