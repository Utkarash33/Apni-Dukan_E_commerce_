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


// Middle section////////////////////////////////////////////



let image = document.getElementById("img")
let title = document.getElementById("title")
let category = document.getElementById("catagory")
let price = document.getElementById("pri")
let rating = document.getElementById("rate")
let LSdata = JSON.parse(localStorage.getItem("product"))
let cartbtn = document.getElementById("addToCart")
let card =JSON.parse(localStorage.getItem("cart"))||[]
let flt = document.getElementById("filter")
cart_count.innerText = JSON.parse(localStorage.getItem("cartCount"))

console.log(LSdata)

cartbtn.addEventListener("click",()=>
{LSdata["quantity"] =flt.value 
  if(card.length==0)
  {
    LSdata.quantity =flt.value 
   card.push(LSdata)
   localStorage.setItem("cart",JSON.stringify(card))
  }
  else
  { let flag= true
    for(let i=0;i<card.length;i++)
  {
    if(LSdata.id==card[i].id && LSdata.category==card[i].category)
    {
     flag = false;
     break;
    }
  }
  if(flag==true)
  {
    card.push(LSdata)
    localStorage.setItem("cart",JSON.stringify(card))
  }
  else{
   alert("Item already in cart")
  }
  }
  cart_count.innerText = card.length
  if(flt==1)
  {
    cart_count.innerText = card.length

  }
  else
  {
   cart_count.innerText =  +cart_count.innerText -1 + (+flt.value)
  }
  localStorage.setItem("cartCount",JSON.stringify(cart_count.innerText))
})
image.setAttribute("src",LSdata.image)
title.innerText = LSdata.title
category.innerText = LSdata.category
  price.innerHTML = "$" +LSdata.price
  rating.innerText ="⭐" +LSdata.rating.rate