// Custom JavaScript for Onyx Ultrasonics Documentation

// Add smooth scroll behavior for internal links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add copy button functionality enhancement
  const copyButtons = document.querySelectorAll('.md-clipboard');
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Visual feedback
      this.classList.add('copied');
      setTimeout(() => {
        this.classList.remove('copied');
      }, 2000);
    });
  });

  // External link handling
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes('onyxultrasonics.co.uk')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});