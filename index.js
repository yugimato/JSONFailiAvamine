const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const functions = require('./helpers/functions')

let rawdata = fs.readFileSync('./views/datas.json');
let student = JSON.parse(rawdata);
let student2 = student.objects
const realStudent = student2.sort(function(a, b) { return (a.Lastname < b.Lastname) ? -1 : (a.Lastname > b.Lastname) ? 1 : 0});

//console.log(student2)
app.set('views', path.join(__dirname, './views'))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.ejs',{'persons' : realStudent, functions} );
  // console.log(student.objects)
})

app.get('/:id/details', (req,res) => {
  const { id } = req.params
  const comment = realStudent.find(c => c.ID === id)
  console.log(comment)
  var title = 'Detailne info'
  if (comment == undefined) {
      title = 'Detailne info'
      res.redirect('/404')
  } else {
      res.render('details.ejs', { title, comment, functions })
  }
})

app.listen(5000, function() {
  console.log("Server on pordil 5000");
})
