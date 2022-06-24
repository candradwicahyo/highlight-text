window.addEventListener('DOMContentLoaded', () => {
  
  const text = document.querySelector('.text');
  const button = document.querySelector('.search');
  button.addEventListener('click', function() {
    const value = new RegExp(this.previousElementSibling.value.trim(), 'gi');
    text.innerHTML = text.textContent.replace(value, match => `<mark class="bg-primary text-light">${match}</mark>`);
    this.previousElementSibling.value = '';
  });
  
});