 let email =document.getElementById("email");
let password = document.getElementById("password")
let btn = document.getElementById('submit')
let signin =  document.getElementById("signup")
let LSdata = JSON.parse(localStorage.getItem("user-details"))||[]
signin.addEventListener("click",function()
{
    window.location.href = "./signup.html"
})

btn.addEventListener("click",function()
{
  
  if(email.value!=""&&password.value!='')
  {
          if(LSdata.length==0)
            {
            alert("user-details not avalible, please create new account")
            }
             else
             { let flag = false,j=0
              for(let i=0;i<LSdata.length;i++)
               {
                 if(LSdata[i].email == email.value)

                   {
                    flag = true;
                    j=i;
                    break;
                    
                   }
                }
                if(flag==true)
                 {
                   
                     if(LSdata[j].password == password.value)
                     {
                       alert("Sign in Successfully")
                       localStorage.setItem("User",JSON.stringify(LSdata[j]))

                       window.location.href ="./index.html"
                     }
                     else
                     {
                        alert("Incorrect password")
                     }
                   }
                 else
                 {
                    alert("Email is not correct")
                    email.value=""
                 }
             }
     }else
     {
      alert("Please fill all the details")
    }
})