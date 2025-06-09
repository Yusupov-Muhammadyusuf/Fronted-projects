const mic = document.getElementById('mic_img');
const searchInput = document.getElementById('search');
const python = document.getElementById('python');
const js = document.getElementById('js');
const chatgpt = document.getElementById('chatgpt');
const mail = document.getElementById('mail');

if ('webkitSpeechRecognition' in window) {
    const response = new webkitSpeechRecognition();
    response.lang = 'en-US';

    mic.addEventListener('click', () => {
        response.start();
    });

    response.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('searchInput').value = transcript;
    };
} else {
    console.log("Speech Recognition is not supported in this browser.");
}

// Searching...
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
}); 

const siteLinks = {
    python: 'https://www.python.org/',
    js: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    chatgpt: 'https://chat.openai.com/',
    mail: 'https://www.mail.com',
};

function openSiteById(id) {
    switch(id) {
      case 'python':
        window.open(siteLinks.python, '_blank');
        break;
      case 'js':
        window.open(siteLinks.js, '_blank');
        break;
      case 'chatgpt':
        window.open(siteLinks.chatgpt, '_blank');
        break;
      case 'mail':
        window.open(siteLinks.mail, '_blank');
      default:
        alert('No link found for this id:', id);
    }
}

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
      const url = circle.getAttribute('data-url');
      if(url) {
        window.open(url, '_blank');
      }
    });
});  

mail.addEventListener('click', () => {
  const url = mail.getAttribute('data-url');
  if (url) {
    window.open(url, '_blank');
  }
});