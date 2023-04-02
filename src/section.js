let logo = document.getElementById("logo")
let input = document.getElementById("search")
let search_btn = document.getElementById("search_icon")
let signin_text= document.querySelector("#signin>p")
let signin_btna= document.querySelector("#signin>a")
let order = document.getElementById("order")
let cart = document.getElementById("cart")
let cart_count = document.getElementById("product_count")

let user= []
user.push( JSON.parse(localStorage.getItem("User")))
console.log(user[0])
if(user[0]!=null)
{
   signin_text.innerText = "Hello," +" "+user[0].name;
   signin_btna.innerText = "Sign out"
}

   signin_btna.addEventListener("click",()=>
    { 
        if(signin_btna.innerText == "Sign out")
       { 
        localStorage.removeItem("User")
        localStorage.removeItem("cartCount")
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

cart_count.innerText = JSON.parse(localStorage.getItem("cartCount")) 
let mobile = document.getElementById("mobile")
let clothing = document.getElementById("cloth")
let jewel = document.getElementById("jewel")


mobile.addEventListener("click",()=>{

window.location.href ="./mobiles.html"

}
)
clothing.addEventListener("click",()=>{

  window.location.href ="./sections.html"
  
  }
  )
  jewel.addEventListener("click",()=>{

    window.location.href ="./jewel.html"
    
    }
    )
logo.addEventListener("click",()=>
{
 
  window.location.href ="./index.html"
})
search_btn.addEventListener("click",function()
{
    if(input.value==="")
    {
        display(fatchData)
    }else{
        let filtered =  fatchData.filter(function(elm)
    {
          if((elm.title).toUpperCase().includes(input.value.toUpperCase()))
          {
            return true;
          }
          else{
            return false;
          }
    })
  display(filtered)
    }
 
})
 
 
 
 
let sortbtn = document.getElementById("selectbtn")
 
 
 
 
 
 
 
 
 
 
 
 
 
//  Middle Section ///////////////////////////////////
 
 
 
 
 

    let container = document.getElementById("container");
   
  let response =  fetch("./API.js");
  let LSdata = JSON.parse(localStorage.getItem("masai_ecomm"))||[]
let fatchData =[];
  response.then((res)=>{
     return res.json()
  })
  .then((data)=>{
      display(data);
      fatchData = data;
  }).catch((error)=>{
    console.log(error)
  })
  function display(data)
  {
    container.innerText = ""
    sortbtn.addEventListener("change",()=>
    { let igi =[...data]
    if(sortbtn.value=="lth")
    {
      igi= igi.sort((a,b)=>
     
     {
       return a.price -  b.price
     })
     display(igi)
     console.log(data)
    }
    else if(sortbtn.value=="htl")
    {
      igi= igi.sort((a,b)=>
     
      {
        return b.price - a.price
      })
      display(igi)
     
    }
  })












 data.forEach(function(elm) {
    let product= document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("h2")
    let decription = document.createElement("p")
    let sign = document.createElement("span")
    let price = document.createElement("h4")
    let add = document.createElement("button")
    let rating = document.createElement("h4")
       
    rating.innerText = "⭐"+elm.rating.rate

     img.setAttribute("src",elm.image)
     title.innerText = elm.title;
     decription.innerText = elm.description;
     sign.innerText ="$"
     price.innerText = elm.price;
     add.innerText = "Show Know"

     add.addEventListener("click",function()
     { let x = elm
      localStorage.setItem("product",JSON.stringify(x))
      window.location.href ="./singleproduct.html"
     })
     
    product.append(img,title,sign,price,rating,add)
    product.addEventListener("click",()=>
    {
      let x = elm
       localStorage.setItem("product",JSON.stringify(x))
       window.location.href ="./singleproduct.html"
    })
    container.append(product)
 });
  }