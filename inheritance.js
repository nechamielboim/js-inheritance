//htmlelement

const HtmlElement = function (type , text){
    this.id = HtmlElement.prototype.counter++
    this.type = type
    this.text = text
    if(new.target)
    {
        throw new Error("its an abstract class !!!")
    }
}

HtmlElement.prototype.counter = 0

HtmlElement.prototype.render = function(){
     const he = document.createElement(this.type)
     he.id = "elem" + this.id
     if(this instanceof HtmlElement)
     {
         he.textContent = this.text
     }
     if(this instanceof ImageElement)
     {
        he.src = this.src
        he.alt = this.changedWrite
     }
     if(this instanceof SelectElement)
     {
        for (let i = 0; i < this.arr.length; i++) {
            op = document.createElement("option")
            op.value = i+1
            op.textContent = this.arr[i]
            he.appendChild(op)      
        }
     }
     return he
}

//imgelement

const ImageElement = function(src , changedWrite){
    HtmlElement.call(this,"img") 
    this.src = src 
    this.changedWrite = changedWrite
}

ImageElement.prototype = Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor = ImageElement

//selectelement

const SelectElement = function(arr){
    HtmlElement.call(this,"select")
    this.arr = arr
}

SelectElement.prototype = Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor = SelectElement

//

function saveElement(){
    text=document.getElementById("t1").value
    type=document.getElementById("t2").value
    try {
        element1=new HtmlElement(type,text)
        document.body.append(element1.render())
     } catch (error) {
        console.log(error.message)
     }
  }

function saveImage(){
    changedWrite=document.getElementById("t3").value
    src=document.getElementById("t4").value
    try {
        element2=new ImageElement(src,changedWrite)
        document.body.append(element2.render())
    } catch (error) {
        console.log(error.message)
    }
}

function saveSelect(){
    lst=document.getElementById("t5").value
    let arr = lst.split(",")
    try {
        element3=new SelectElement(arr)
        document.body.append(element3.render())
    } catch (error) {
        console.log(error.message)
    }
}
