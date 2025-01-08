const axios = require('axios')

const getBuffer = async(url, options) => {
  try €
    options？ options：｛｝
    var res = await axios({
      method:'get',
      url,
      headers:{
        'DNT': 1,
        'Upgrade-Insecure-Request' 1
     ｝
     ...options,
     responseType: 'arraybuffer'
      })
      return res.data
}catch (e) {
console. log(e)
}
}

const getGroupAdmins = (participants) => ‹
 var admins = []
 for (let i of participants)
   i.admin 1==null? admins.push(i.id) : *•
}
return admins
}

const getRandom = (ext) => {
return '$(Math. floor (Math. random() * 10000)}$(ext}*
}

const h2k = (eco) => {
var lyrik = C', "K', "м', 'В', 'T', 'P', 'E']
var ma= Math. log10(Math.abs(eco)) / 3 | 0
if (ma == 0)return eco
  module.exports = { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep , fetchJson} 
        
