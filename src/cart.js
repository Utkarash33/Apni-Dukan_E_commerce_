let logo = document.getElementById("logo")
let signin_text= document.querySelector("#signin>p")
let signin_btna= document.querySelector("#signin>a")
let order = document.getElementById("order")
let cart = document.getElementById("cart")
    logo.addEventListener("click",()=>
{ 
  window.location.href ="./index.html"
})
let cart_count = document.getElementById("product_count")
let user = JSON.parse(localStorage.getItem("User"))||[]
//  let Guest = [...user]
    signin_btna.addEventListener("click",()=>
    { 
        if(signin_btna.innerText == "Sign out")
       { 
        localStorage.removeItem("User")
        user=[]
        // display(Guest)
        signin_btna.innerText = "Sign In"
        signin_text.innerText ="Hello Guest"
    }
     else if(signin_btna.innerText=="Sign In")
     {
    window.location.href="./signin.html"
     }
     
    })
    


 user =[]
user.push(JSON.parse(localStorage.getItem("User")))
if(user.length==1)
{
   signin_text.innerText = "Hello," +" "+user[0].name;
   signin_btna.innerText = "Sign out"
}


// middle section/////////////////////////////////////////////////////////
// 

let text = document.querySelector("#text>h1")
let container = document.getElementById("container")

let LSdata = JSON.parse(localStorage.getItem("cart"))||[]

if(LSdata.length==0)
{
    let img = document.createElement("img")
     img.setAttribute("src","./imgs/products/emptyCart.cec40e63b8c18a4291e6.png")
     container.append(img)
     text.innerText = "Cart is empty"
}

else

{
    let thr = document.createElement("hr")

    for(let i=0;i<LSdata.length;i++)
    { 
        let card  = document.createElement("div")
        let title = document.createElement("h1")
         let first = document.createElement("div")

         first.setAttribute("id","first")
         
         let second = document.createElement("div")
         let third = document.createElement("div")
         second.setAttribute("id","second")
     
        title.innerText = LSdata[i].title

        let price = document.createElement("h1")
        price.innerText = LSdata[i].price;
        let quantity = "Quantity:"
        let qtotal = document.createElement("span")
        qtotal.innerText = LSdata[i].quantity
        let del = document.createElement("p")
         del.innerText = "Delete item from Cart"
         let subtotaltext = "Subtotal"
         let subtotal = document.createElement("p")
         subtotal.innerText = Number(qtotal.innerText)*Number(price.innerText)
           



        let image = document.createElement("img")
        image.setAttribute("src",LSdata[i].image)
       third.append(quantity,qtotal)
        first.append(image)
        second.append(title,price,third,del,subtotaltext,subtotal)
        card.append(first,second)
        card.setAttribute("id","card")
        
       
         container.append(card)
   
        
    }
   
}
