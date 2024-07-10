// Add interactive elements and animations if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example animation using JavaScript
    const header = document.querySelector('header');
    header.style.height = '100vh';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'center';
  
    const title = header.querySelector('h1');
    title.style.transition = 'opacity 1s ease-in-out';
    title.style.opacity = '0';
  
    setTimeout(() => {
      title.style.opacity = '1';
    }, 500);
  });
  