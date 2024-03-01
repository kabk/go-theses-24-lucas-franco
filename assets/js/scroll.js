document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    let currentBoxIndex = 0;

    document.addEventListener('wheel', function (event) {
        event.preventDefault();

        const deltaY = event.deltaY;
        const currentBox = boxes[currentBoxIndex];

        if (deltaY > 0 && currentBox.scrollTop >= currentBox.scrollHeight - currentBox.clientHeight) {
            // Scrolling down within the current box and reached the bottom
            scrollToNextBox();
        } else if (deltaY < 0 && currentBox.scrollTop <= 0) {
            // Scrolling up within the current box and reached the top
            scrollToPrevBox();
        } else {
            // Continue scrolling within the current box
            currentBox.scrollTop += deltaY;
        }
    });

    function scrollToNextBox() {
        if (currentBoxIndex < boxes.length - 1) {
            currentBoxIndex++;
            const nextBox = boxes[currentBoxIndex];
            nextBox.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToPrevBox() {
        if (currentBoxIndex > 0) {
            currentBoxIndex--;
            const prevBox = boxes[currentBoxIndex];
            prevBox.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }
});
