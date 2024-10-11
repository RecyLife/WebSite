function smoothScroll(linkId, targetId) {
    const targetElement = document.getElementById(targetId);
    let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    if (targetElement.id == "product") {
        elementPosition = elementPosition - 80;
    }
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}