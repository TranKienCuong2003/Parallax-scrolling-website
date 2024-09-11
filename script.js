window.onscroll = () => {

    document.querySelector(".layer-4").style.marginBottom = -scrollY / 2.5 + "px";

    document.querySelector(".layer-4").style.marginRight = scrollY / 4.5 + "px";

    document.querySelector(".layer-3").style.marginBottom = -scrollY / 2.5 + "px";

    document.querySelector(".layer-3").style.marginLeft = scrollY / 6 + "px";

    document.querySelector(".layer-2").style.marginBottom = -scrollY / 2.5 + "px";

    document.querySelector(".layer-2").style.marginRight = scrollY / 6 + "px";

    document.querySelector(".layer-1").style.marginBottom = -scrollY / 3.5 + "px";

    document.querySelector(".Home h1").style.marginTop = scrollY / 1.2 + "px";

    document.querySelector(".Home h1").style.opacity = (350 - scrollY) / 350;

};