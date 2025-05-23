document.addEventListener("DOMContentLoaded", function () {
    const profileCards = document.querySelectorAll(".profile-card");

    profileCards.forEach(card => {
        let startX = 0;

        card.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        card.addEventListener("touchmove", (e) => {
            let touchX = e.touches[0].clientX;
            let deltaX = touchX - startX;
            card.style.transform = `translate(${deltaX}px) rotate(${deltaX * 0.1}deg)`;
        });

        card.addEventListener("touchend", (e) => {
            let touchX = e.changedTouches[0].clientX;
            let deltaX = touchX - startX;

            if (deltaX > 100) {
                card.classList.add("swiped-right");
                alert("💘 Liked!");
            } else if (deltaX < -100) {
                card.classList.add("swiped-left");
                alert("👋 Passed!");
            } else {
                card.style.transform = "";
            }
        });
    });
});
