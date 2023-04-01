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
        window.location.href="./signin.html"
        localStorage.removeItem("cartCount")
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
 let subtotal = document.getElementById("subtotal")
let text = document.querySelector("#text>h1")
let container = document.getElementById("container")
let containerd = document.getElementById("conatinerd")
let count = JSON.parse(localStorage.getItem("cartCount"))

let LSdata = JSON.parse(localStorage.getItem("cart"))||[]

if(LSdata.length==0)
{
    let img = document.createElement("img")
    
    img.setAttribute("src","./imgs/products/emptyCart.cec40e63b8c18a4291e6.png")
     img.style.width = "50%";
    container.innerText = ""
   container.append(img)
     
}

else

{   display(LSdata)

   
}
function display(LSdata)
{ let total =0
        
    let thr = document.createElement("hr")
    for(let i=0;i<LSdata.length;i++)
{ 
    let card  = document.createElement("div")
    let title = document.createElement("p")
     let first = document.createElement("div")
     
     first.setAttribute("id","first")
     
     let second = document.createElement("div")
     let third = document.createElement("div")


     third.setAttribute("id","third")
     second.setAttribute("id","second")
 
    title.innerText = LSdata[i].title
     title.style.fontWeight = 600
    let price = document.createElement("p")
    price.innerText = LSdata[i].price;
    let quantity = "Quantity:"
    let qtotal = document.createElement("span")
    qtotal.innerText = LSdata[i].quantity
    let del = document.createElement("a")
     del.innerText = "Delete item from Cart"
     del.setAttribute("id","delbtn")
     del.addEventListener("click",()=>
     {
     LSdata=  LSdata.filter((elm,index)=>
        {
           
             return (LSdata[i]!= elm)
           
        })
        localStorage.setItem("cart" ,JSON.stringify(LSdata))
        count = +count-1
        localStorage.setItem("cartCount",JSON.stringify(count))
        location.reload()
     })




     let subtotaltext = "Subtotal"
     let subtotal = document.createElement("span")
     subtotal.innerText = Number(qtotal.innerText)*Number(price.innerText)
        total += Number(subtotal.innerText)

    let hr = document.createElement("hr")
    hr.setAttribute("id","hr")

    let image = document.createElement("img")
    image.setAttribute("src",LSdata[i].image)
   third.append(`$ ${price.innerText}`)
    first.append(image)
    second.append(title,quantity,qtotal,del)
    card.append(first,second,third)
    card.setAttribute("id","card")       
     container.append(hr,card)

    
}
subtotal.innerText=(`SubTotal: $${Math.round(+total)}`)
let cartotal = document.getElementById("cartPrice")

cartotal.innerText = (`$${Math.round(+total)}`)
}
 let backtohome = document.getElementById("backtohome")
 backtohome.addEventListener("click",()=>
 {
    window.location.href = "./index.html"
 })


let payment = document.getElementById("pay")
payment.addEventListener("click",()=>
{
   
     window.location.href="./paymentGateway.html"
})




