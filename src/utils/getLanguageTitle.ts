const getLanguageTitle = (language: any) => {
  if (language === 'en') {
    return 'English'
  } else if (language === 'zh-Hant') {
    return '繁體中文'
  } else if (language === 'zh-Hans') {
    // return '简体中文'
    return '中文'
  } else if (language === 'vi') {
    return 'Tiếng Việt'
  } else if (language === 'es') {
    return 'Español'
  } else if (language === 'ko') {
    return '한국어'
  } else if (language === 'ja') {
    return '日本語'
  } else if (language === 'th') {
    return 'ไทย'
  }
  return 'English'
}

export default getLanguageTitle
