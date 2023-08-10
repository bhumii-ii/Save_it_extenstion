let save= document.getElementById("savebtn")
let myLeads=[]
let inputText=document.getElementById("inputel")
let ulEl = document.getElementById("ul-el")
let deleteBtn= document.getElementById("delete-btn")
let tabBtn=document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if(leadsFromLocalStorage!=null)
{
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
deleteBtn.addEventListener("dblclick",function() 
{
    localStorage.clear
    myLeads=[]
    render(myLeads)
})

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

save.addEventListener("click",function(){
    myLeads.push(inputText.value)
    
    inputel.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})
function render(leads)
{
    let items=""
for(let i=0;i<leads.length;i++)
{
    items += `<li>
                    <a href=${leads[i]}> ${leads[i]} </a>
             </li>`
   

}
ulEl.innerHTML=items
}
