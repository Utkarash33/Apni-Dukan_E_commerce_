// Nac bar Scripts
let logo = document.getElementById("logo")
let input = document.getElementById("search")
let serach_btn = document.getElementById("search_icon")
let signin_text= document.querySelector("#signin>p")
let signin_btna= document.querySelector("#signin>a")
let order = document.getElementById("order")
let cart = document.getElementById("cart")
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
     },4000)
 })



// Nav bar Script<>//


//Middle Section<>//
//   let sort = document.getElementById("Sort")
//     let container = document.getElementById("container");
//     let filter = document.getElementById("filter")
//   let response =  fetch("./API.js");
//   let LSdata = JSON.parse(localStorage.getItem("masai_ecomm"))||[]
// let fatchData =[];
//   response.then((res)=>{
//      return res.json()
//   })
//   .then((data)=>{
//       display(data);
//       fatchData = data;
//   }).catch((error)=>{
//     console.log(error)
//   })
//   filter.addEventListener("change",function()
//     {
//         if(filter.value==="")
//         {
//             display(fatchData)
//         }else{
//             let filtered =  fatchData.filter(function(elm)
//         {
//               if(elm.category === filter.value)
//               {
//                 return true;
//               }
//               else{
//                 return false;
//               }
//         })
//       display(filtered)
//         }
     
//     })
//     sort.addEventListener("change",function()
//     {
//       if(sort.value==="")
//       {
//         display(fatchData)
//       }else if(sort.value === "Low to High")
//       {
//        fatchData = fatchData.sort((a,b)=>{
//           return a.price-b.price
//         })
        
//       }
//       else if(sort.value=== "High to Low")
//         {
//           fatchData.sort((a,b)=>{
//             return b.price - a.price
//           })
//         }
//         display(fatchData)
//     })
//   function display(data)
//   {
//     container.innerText = ""
//  data.forEach(function(elm) {
//     let product= document.createElement("div")
//     let img = document.createElement("img")
//     let title = document.createElement("h2")
//     let decription = document.createElement("p")
//     let price = document.createElement("h4")
//     let add = document.createElement("button")

//      img.setAttribute("src",elm.image)
//      title.innerText = elm.title;
//      decription.innerText = elm.description;
//      price.innerText = elm.price;
//      add.innerText = "addToCart"

//      add.addEventListener("click",function()
//      {
//        LSdata.push(elm)
//        localStorage.setItem("masai_ecomm",JSON.stringify(LSdata))
//      })



//     product.append(img,title,price,add)
//     container.append(product)
//  });
//   }



   