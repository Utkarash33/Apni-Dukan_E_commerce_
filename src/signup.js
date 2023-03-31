let name = document.getElementById("name")
let email =document.getElementById("email");
let password = document.getElementById("password")
let btn = document.getElementById('submit')
let signin =  document.getElementById("Sign_in")
let LSdata = JSON.parse(localStorage.getItem("user-details"))||[]
signin.addEventListener("click",function()
{
    window.location.href = "./signin.html"
})
console.log(LSdata)

btn.addEventListener("click",function()
{
  
  if(name.value!=""&&email.value!=""&&password.value!='')
  {
    let data = {
        name:name.value,
        email:email.value,
        password:password.value,
      }
          if(LSdata.length==0)
            {
            LSdata.push(data)
            }
             else
             { let flag = true;
              for(let i=0;i<LSdata.length;i++)
               {
                 if(LSdata[i].email == email.value)

                   {
                    flag = false;
                   }
                }
                if(flag==true)
                 {
                    LSdata.push(data)
                    alert("Account Created successfully");
                    window.location.href="./signin.html"
                    
                    
                 }
                 else
                 {
                    alert("Change your email")
                    email.value=""
                 }
                  localStorage.setItem("user-details",JSON.stringify( LSdata))
             }
     }else
     {
    alert("Please fill all the details")
    }
})