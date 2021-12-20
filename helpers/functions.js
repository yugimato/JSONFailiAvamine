function convertDate(strDate) {
  let parts = strDate.split('-')
  return parts[2] + '.' + parts[1] + '.' +parts[0]
}

function isBirthday(birthday) {
  let today = new Date()
  let day = ('0' + today.getDate()).slice(-2)
  let month = ('0' + (today.getMonth() + 1)).slice(-2)
  let monthDay = month + '-' + day
  if(monthDay === birthday.substr(5)) {
    return true
  }
  return false
}

function formatDate(d)
 {
  date = new Date(d)
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = dd+'/'+mm+'/'+yyyy
}

function makeBigLetters(value) {
  var upperValue = value.toUpperCase()
  return upperValue
}

function makeEmail(firstname, lastname, company) {
  if (company !== '') {
    var emailCompany = company.split(' ')[0]
    var email = (firstname + '.' + lastname + '@' + emailCompany + '.com').toLowerCase()
  }
  return email
}

module.exports = {
  convertDate: convertDate,
  isBirthday: isBirthday,
  makeBigLetters : makeBigLetters,
  makeEmail : makeEmail,
  formatDate : formatDate
}