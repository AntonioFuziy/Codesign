document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    let strlink = "projeto.html?pai=" + value + "&key={{@key}}"
    let link = document.querySelector('.linkx')
    console.log(link)
    link.href = strlink
    link = document.querySelector('.linkx1')
    console.log(link)
    link.href = strlink
    link = document.querySelector('.linkx2')
    console.log(link)
    link.href = strlink
    let db = coDesConnect('https://co-design-df824.firebaseio.com/')
  
    db.download('/', function(data) {
  
      context = data['portfolio'][value]
      coDesReplace('title', context)

      context = data
      coDesReplace('.menu-area', context)

      context = data['portfolio'][value]
      coDesReplace('.grid-categoria', context)
    })
  })