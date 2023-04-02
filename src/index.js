// Nac bar Scripts
let logo = document.getElementById("logo")
let input = document.getElementById("search")
let serach_btn = document.getElementById("search_icon")
let signin_text= document.querySelector("#signin>p")
let signin_btna= document.querySelector("#signin>a")
let order = document.getElementById("order")
let cart = document.getElementById("cart")

let cart_count = document.getElementById("product_count")

//  let Guest = [...user]
    cart.addEventListener("click",()=>
    { 
      if(signin_btna.innerText=="Sign out")
      {
         window.location.href="./cart.html"
      }
      else
      {
         window.location.href="./signin.html"
      }
      
    })

   let user= []
   user.push( JSON.parse(localStorage.getItem("User")))
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
let slide = document.getElementById("slide")
   let img = document.querySelector("#slide>img")
   
let x =0
//    console.log(x)
  let res2= fetch("/API2.js")
  res2.then((res)=>{
    return res.json()

 })
 .then((data)=>{
    let i=1
     setInterval(()=>
     {
      img.src = data[i].image
      i++
      if(i>4)
      {
        i=0
      }
     },3000)
 })





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
 
// Nav bar Script<>//


//Middle Section<>//




   let mobiles = document.getElementById("mobile_top")
   mobiles.addEventListener("click",()=>
   {
      window.location.href = "./mobiles.html"
   })
   let mobileimg = document.getElementById("mobiles")
  
   mobileimg.addEventListener("click",()=>
   {
      window.location.href = "./mobiles.html"
   })
   let clothimg = document.getElementById("cloths")
   clothimg.addEventListener("click",()=>
   {
      window.location.href = "./sections.html"
   })

   