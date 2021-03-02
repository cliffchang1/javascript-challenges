let movienumber = ['1','2','3','4','5','6']
let movieposter = ['https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg', 'https://i.pinimg.com/originals/95/a8/03/95a803a0b195772069064a1b4bcad5a8.png','https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01061018/7315993.jpg?q=50','https://i5.walmartimages.com/asr/ef612001-986b-4c14-b497-d5508d77e27c_1.2c46cec7a22626e1633bab68abc15b7d.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff', 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/Guardians-Of-The-Galaxy.jpg?q=50&fit=crop&w=740&h=1096','https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Thor-The-Dark-World.jpg?q=50&fit=crop&w=740&h=1096' ]
let moviename = ['Avengers:Endgame', 'Avengers:Infinity War', 'Ant-Man', 'Black Panther', 'Guardians of The Galaxy', 'Thor:The Dark World']
let newmoviename
let newmoviepic
function Newmoviepic(){
    newmoviepic = document.querySelector(".img-link").value
}
function Newmoviename(){
    newmoviename = document.querySelector(".movie-name").value
}
function push(){
    Newmoviename()
    moviename.unshift(newmoviename)
    moviename.pop()
    Newmoviepic();
    movieposter.unshift(newmoviepic)
    movieposter.pop()
    document.querySelector(".item1").innerHTML = `<img src= "${movieposter[0]}">`
document.querySelector(".item2").innerHTML = `<img src= "${movieposter[1]}">`
document.querySelector(".item3").innerHTML = `<img src= "${movieposter[2]}">`
document.querySelector(".item4").innerHTML = `<img src= "${movieposter[3]}">`
document.querySelector(".item5").innerHTML = `<img src= "${movieposter[4]}">`
document.querySelector(".item6").innerHTML = `<img src= "${movieposter[5]}">`
document.querySelector(".item1-2").innerHTML = (moviename[0])
document.querySelector(".item2-2").innerHTML = 
(moviename[1])
document.querySelector(".item3-2").innerHTML = (moviename[2])
document.querySelector(".item4-2").innerHTML = (moviename[3])
document.querySelector(".item5-2").innerHTML = (moviename[4])
document.querySelector(".item6-2").innerHTML = (moviename[5])
document.querySelector(".item1-1").innerHTML = (movienumber[0])
document.querySelector(".item2-1").innerHTML = (movienumber[1])
document.querySelector(".item3-1").innerHTML = (movienumber[2])
document.querySelector(".item4-1").innerHTML = (movienumber[3])
document.querySelector(".item5-1").innerHTML = (movienumber[4])
document.querySelector(".item6-1").innerHTML = (movienumber[5])
}
document.querySelector(".item1").innerHTML = `<img src= "${movieposter[0]}">`
document.querySelector(".item2").innerHTML = `<img src= "${movieposter[1]}">`
document.querySelector(".item3").innerHTML = `<img src= "${movieposter[2]}">`
document.querySelector(".item4").innerHTML = `<img src= "${movieposter[3]}">`
document.querySelector(".item5").innerHTML = `<img src= "${movieposter[4]}">`
document.querySelector(".item6").innerHTML = `<img src= "${movieposter[5]}">`
document.querySelector(".item1-2").innerHTML = (moviename[0])
document.querySelector(".item2-2").innerHTML = 
(moviename[1])
document.querySelector(".item3-2").innerHTML = (moviename[2])
document.querySelector(".item4-2").innerHTML = (moviename[3])
document.querySelector(".item5-2").innerHTML = (moviename[4])
document.querySelector(".item6-2").innerHTML = (moviename[5])
document.querySelector(".item1-1").innerHTML = (movienumber[0])
document.querySelector(".item2-1").innerHTML = (movienumber[1])
document.querySelector(".item3-1").innerHTML = (movienumber[2])
document.querySelector(".item4-1").innerHTML = (movienumber[3])
document.querySelector(".item5-1").innerHTML = (movienumber[4])
document.querySelector(".item6-1").innerHTML = (movienumber[5])

