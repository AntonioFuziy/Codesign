document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://co-design-df824.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.menu-area', context)
    coDesReplace('.grid-index', context)
  })
})