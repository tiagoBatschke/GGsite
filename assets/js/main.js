const accordionContent = document.querySelectorAll(".accordion-content");
 
accordionContent.forEach((item, index)  =>{
let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("ri-add-line", "questions__icon");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("questions__icon", "ri-add-line");
        }
        
        removeOen(index);
    })
})
