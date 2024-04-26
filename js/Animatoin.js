// =================================================================

const observer = new IntersectionObserver((Animation_On_Scroll) => {
    Animation_On_Scroll.forEach((Gps_Scroll) => {
        console.log(Gps_Scroll);
        if (Gps_Scroll.isIntersecting) {
            Gps_Scroll.target.classList.add("show");
        } else {
            Gps_Scroll.target.classList.remove("show");
        }
    });
});

// =================================================================

// =================================================================

const Animation_Up = document.querySelectorAll(".Animation_Up");
Animation_Up.forEach((Animation_On_Scroll_By_Css_JavaScript) =>
    observer.observe(Animation_On_Scroll_By_Css_JavaScript));

// =================================================================

// =================================================================

const Animation_Down = document.querySelectorAll(".Animation_Down");
Animation_Down.forEach((Animation_On_Scroll_By_Css_JavaScript) =>
    observer.observe(Animation_On_Scroll_By_Css_JavaScript));

// =================================================================

// =================================================================

const Animation_Opacity = document.querySelectorAll(".Animation_Opacity");
Animation_Opacity.forEach((Animation_On_Scroll_By_Css_JavaScript) =>
    observer.observe(Animation_On_Scroll_By_Css_JavaScript));

// =================================================================