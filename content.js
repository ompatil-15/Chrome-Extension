function generateStrongPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;';
  let password = '';
  for (let i = 0; i < 25; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

function createHoverCard(password, inputElement) {
  const hoverCard = document.createElement('div');
  hoverCard.style.position = 'absolute';
  hoverCard.style.backgroundColor = '#18181b';
  hoverCard.style.color = '#a1a1aa';
  hoverCard.style.border = '1px solid #444';
  hoverCard.style.padding = '10px';
  hoverCard.style.borderRadius = '8px';
  hoverCard.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.5)';
  hoverCard.style.cursor = 'pointer';
  hoverCard.style.fontFamily = 'Arial, sans-serif';
  hoverCard.style.fontSize = '14px';
  hoverCard.innerText = `SHIELD Password Manager\nUse strong password: ${password}`;
  hoverCard.style.opacity = '0';
  hoverCard.style.transition = 'opacity 0.2s ease-in-out';
  hoverCard.style.opacity = '1';

  hoverCard.addEventListener('click', () => {
    inputElement.value = password;
    document.body.removeChild(hoverCard);
  });

  const rect = inputElement.getBoundingClientRect();
  hoverCard.style.top = `${rect.top + window.scrollY + rect.height + 5}px`;
  hoverCard.style.left = `${rect.left + window.scrollX}px`;

  document.body.appendChild(hoverCard);

  document.addEventListener('click', function onDocumentClick(event) {
    if (!hoverCard.contains(event.target) && event.target !== inputElement) {
      document.body.removeChild(hoverCard);
      document.removeEventListener('click', onDocumentClick);
    }
  });
}

document.addEventListener('focusin', (event) => {
  if (event.target.type === 'password') {
    const password = generateStrongPassword();

    createHoverCard(password, event.target);
  }
});
