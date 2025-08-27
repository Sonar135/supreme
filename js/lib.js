let data = document.querySelectorAll(".bani")
let img1 = document.querySelectorAll(".img1")
let img2 = document.querySelectorAll(".img2")
let partner=document.querySelectorAll(".part_img")

data.forEach((datum, i)=>{
       setTimeout(() => {
                datum.style.display="inline";
            }, i*100);
})


document.onscroll = () => {
    console.log(window.scrollY);

    if(window.scrollY>=237){
    document.querySelector(".para").style.display="block"
}

    if(window.scrollY>=237){
    document.querySelector(".para").style.display="block"
}

    img1.forEach((img, i)=>{
            if(window.scrollY>=628){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })


        img2.forEach((img, i)=>{
            if(window.scrollY>=968){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })


            partner.forEach((img, i)=>{
            if(window.scrollY>=1500){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })


        if(window.scrollY>=1439){
    document.querySelector(".sec3h1").classList.remove("sec3h1")
}

};









    if(window.scrollY>=237){
    document.querySelector(".para").style.display="block"
}


    img1.forEach((img, i)=>{
            if(window.scrollY>=400){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })


        img2.forEach((img, i)=>{
            if(window.scrollY>=968){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })

          partner.forEach((img, i)=>{
            if(window.scrollY>=1500){
                  setTimeout(() => {
                img.style.display="flex";
            }, i*100);
}
    })

            if(window.scrollY>=1439){
    document.querySelector(".sec3h1").classList.remove("sec3h1")
}