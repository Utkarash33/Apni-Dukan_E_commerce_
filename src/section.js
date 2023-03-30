let logo = document.getElementById("logo")
let input = document.getElementById("search")
let search_btn = document.getElementById("search_icon")
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
 
  window.location.href ="./home.html"
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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  Middle Section ///////////////////////////////////
 
 
 
 
 
//  let sort = document.getElementById("Sort")
    let container = document.getElementById("container");
    // let filter = document.getElementById("filter")
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
//   filter.addEventListener("change",function()
//     {
    //     if(filter.value==="")
    //     {
    //         display(fatchData)
    //     }else{
    //         let filtered =  fatchData.filter(function(elm)
    //     {
    //           if(elm.category === filter.value)
    //           {
    //             return true;
    //           }
    //           else{
    //             return false;
    //           }
    //     })
    //   display(filtered)
    //     }
     
    // })
    // sort.addEventListener("change",function()
    // {
    //   if(sort.value==="")
    //   {
    //     display(fatchData)
    //   }else if(sort.value === "Low to High")
    //   {
    //    fatchData = fatchData.sort((a,b)=>{
    //       return a.price-b.price
    //     })
        
    //   }
    //   else if(sort.value=== "High to Low")
    //     {
    //       fatchData.sort((a,b)=>{
    //         return b.price - a.price
    //       })
    //     }
    //     display(fatchData)
    // })
  function display(data)
  {
    container.innerText = ""
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
     {let flag = true;
        for(let i=0;i<LSdata.length;i++)
        {
            if(LSdata[i].id==elm.id)
            {
                flag = false;
                break;
            }
        }
       if(flag == true)
       {
        LSdata.push(elm)
       localStorage.setItem("masai_ecomm",JSON.stringify(LSdata))
       }
       else
       {
        alert("product already added to the cart")
       }
     })
     
    product.append(img,title,sign,price,rating,add)
    container.append(product)
 });
  }