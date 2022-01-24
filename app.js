// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************      
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//toggling nav
navToggle.addEventListener("click", function(){
    /******Static method******/
    // linksContainer.classList.toggle('show-links');

    /******Dynamic method*******/
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const linksHeight = links.getBoundingClientRect().height;

    //toggle height to show or hide nav
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})

//selecting elements
const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

// ********** fixed navbar ************
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    //add fixed navbar at certain height
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    /******topLink******/
    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link){
    link.addEventListener("click", function(e){
        //prevent default
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);

        // console.log(id) //about, home, tour etc, depending on the one clicked

        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;

        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;

        //Calculating the exact Nav Height
        if(!fixedNav){
            position = position - navHeight;
        }

        //On Smaller Screens: to set the element at the top, under fixednav
        if(navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position,
        })

        //close nav
        linksContainer.style.height = 0;
    })
})
