        document.addEventListener("DOMContentLoaded", function () {
            const svgs = document.querySelectorAll(".svg-wrapper");

            svgs.forEach((svg, index) => {
                setTimeout(() => {
                    svg.classList.add("animate__animated", "animate__zoomIn");
                    svg.style.opacity = "1";
                }, index * 300); // Stagger effect: 300ms delay per item
            });
        });

