const display1 = document.querySelector(".loop1")
for(i1=0; i1<5; i1++){
    display1.innerHTML += ("I love homework" + "<br>")
}
document.write("<br>")
const display2 = document.querySelector(".loop2")
for(i2=0; i2<5; i2++){
    display2.innerHTML += (i2)
}
document.write("<br>")
const display3 = document.querySelector(".loop3")
document.write("<br>")
document.write("<br>")
for(i3=15; i3<31; i3++){
    if(i3%3 == 0)
    {
        display3.innerHTML +=(i3+ " ")
    }
}
const display4 = document.querySelector(".loop4")
for (i4=1; i4<=4; i4++){
    for(i5=1; i5<5; i5++)
    {display4.innerHTML += "o"}
    display4.innerHTML += "<br>"
}
const display5 = document.querySelector(".loop5")
for(i6=1; i6<=7; i6++){
    for(i7=1; i7<=i6; i7++){
        display5.innerHTML += "o"
    }
    display5.innerHTML += "<br>"
}
const display6 = document.querySelector(".loop6")
for(i8=1; i8<=7; i8++){
    for(i9=1; i9<= (7-i8); i9++){
    display6.innerHTML += "~"
}
for(i10=1; i10<=i8; i10++){
    display6.innerHTML += "o"}
    display6.innerHTML += "<br>"
}
const display7 = document.querySelector(".loop7")
for(i11=1; i11<=5; i11++){
    for(i12=1; i12<=i11; i12++){
        for(i13=1; i13<=i12; i13++){
            display7.innerHTML += "o"
        }
        display7.innerHTML += "<br>"
    }
    display7.innerHTML += "<br>"
}