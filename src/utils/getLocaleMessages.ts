import messagesEN from '../languages/en'
// import messagesES from '../languages/es'
// import messagesJA from '../languages/ja'
// import messagesKO from '../languages/ko'
// import messagesTH from '../languages/th'
// import messagesVI from '../languages/vi'
// import messagesZHHANS from '../languages/zh-Hans'
// import messagesZHHANT from '../languages/zh-Hant'

const getLocaleMessages = (language: string) => {
  if (language === 'en') {
    return messagesEN
  // } else if (language === 'zh-Hant') {
  //   return messagesZHHANT
  // } else if (language === 'zh-Hans') {
  //   return messagesZHHANS
  // } else if (language === 'vi') {
  //   return messagesVI
  // } else if (language === 'es') {
  //   return messagesES
  // } else if (language === 'ko') {
  //   return messagesKO
  // } else if (language === 'ja') {
  //   return messagesJA
  // } else if (language === 'th') {
  //   return messagesTH
  }
  return messagesEN
}

export default getLocaleMessages
