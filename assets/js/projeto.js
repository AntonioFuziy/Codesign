document.addEventListener('DOMContentLoaded', function() {
    let params = coDesExtract()
    let value = params['key']
    let value2 = params['pai']

  
    let db = coDesConnect('https://co-design-df824.firebaseio.com/')
  
    db.download('/', function(data) {
    
      
      context = data['portfolio'][value2]['projetos'][value]
      console.log(context)
      coDesReplace('title', context)

      context = data
      coDesReplace('.menu-area', context)

      context = data['portfolio'][value2]['projetos'][value]
      coDesReplace('.grid-projeto', context)
    })
  })