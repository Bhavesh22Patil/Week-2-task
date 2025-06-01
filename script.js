// Emoji data - a simplified version for the application
const emojiData = [
    { emoji: "😀", name: "Grinning Face", keywords: ["smile", "happy", "joy", "grin"] },
    { emoji: "😃", name: "Grinning Face with Big Eyes", keywords: ["smile", "happy", "joy", "laugh"] },
    { emoji: "😄", name: "Grinning Face with Smiling Eyes", keywords: ["happy", "joy", "laugh"] },
    { emoji: "😁", name: "Beaming Face with Smiling Eyes", keywords: ["happy", "smile", "laugh"] },
    { emoji: "😆", name: "Grinning Squinting Face", keywords: ["happy", "laugh", "lol"] },
    { emoji: "😅", name: "Grinning Face with Sweat", keywords: ["hot", "happy", "laugh", "sweat"] },
    { emoji: "🤣", name: "Rolling on the Floor Laughing", keywords: ["lol", "laugh", "rofl"] },
    { emoji: "😂", name: "Face with Tears of Joy", keywords: ["laugh", "cry", "joy"] },
    { emoji: "🙂", name: "Slightly Smiling Face", keywords: ["smile", "happy"] },
    { emoji: "🙃", name: "Upside-Down Face", keywords: ["silly", "sarcasm", "irony"] },
    { emoji: "😉", name: "Winking Face", keywords: ["wink", "joke", "flirt"] },
    { emoji: "😊", name: "Smiling Face with Smiling Eyes", keywords: ["happy", "smile", "blush"] },
    { emoji: "😇", name: "Smiling Face with Halo", keywords: ["angel", "innocent"] },
    { emoji: "🥰", name: "Smiling Face with Hearts", keywords: ["love", "adore", "crush"] },
    { emoji: "😍", name: "Smiling Face with Heart-Eyes", keywords: ["love", "crush", "adore"] },
    { emoji: "🤩", name: "Star-Struck", keywords: ["excited", "star", "amazed"] },
    { emoji: "😘", name: "Face Blowing a Kiss", keywords: ["kiss", "love", "flirt"] },
    { emoji: "😗", name: "Kissing Face", keywords: ["kiss", "love"] },
    { emoji: "☺️", name: "Smiling Face", keywords: ["happy", "content", "smile"] },
    { emoji: "😚", name: "Kissing Face with Closed Eyes", keywords: ["kiss", "love"] },
    { emoji: "😙", name: "Kissing Face with Smiling Eyes", keywords: ["kiss", "love", "smile"] },
    { emoji: "🥲", name: "Smiling Face with Tear", keywords: ["happy", "sad", "tear"] },
    { emoji: "😋", name: "Face Savoring Food", keywords: ["yum", "food", "delicious"] },
    { emoji: "😛", name: "Face with Tongue", keywords: ["tongue", "silly", "playful"] },
    { emoji: "😜", name: "Winking Face with Tongue", keywords: ["wink", "silly", "joke"] },
    { emoji: "🤪", name: "Zany Face", keywords: ["crazy", "silly", "wild"] },
    { emoji: "😝", name: "Squinting Face with Tongue", keywords: ["silly", "playful"] },
    { emoji: "🤑", name: "Money-Mouth Face", keywords: ["money", "rich", "dollar"] },
    { emoji: "🤗", name: "Hugging Face", keywords: ["hug", "happy", "embrace"] },
    { emoji: "🤭", name: "Face with Hand Over Mouth", keywords: ["surprise", "shock", "oops"] },
    // Food emojis
    { emoji: "🍕", name: "Pizza", keywords: ["food", "italian", "slice"] },
    { emoji: "🍔", name: "Hamburger", keywords: ["food", "burger", "fast food"] },
    { emoji: "🍟", name: "French Fries", keywords: ["food", "potato", "fast food"] },
    { emoji: "🌭", name: "Hot Dog", keywords: ["food", "sausage", "fast food"] },
    { emoji: "🍿", name: "Popcorn", keywords: ["food", "movie", "snack"] },
    { emoji: "🧁", name: "Cupcake", keywords: ["food", "dessert", "sweet"] },
    { emoji: "🍩", name: "Doughnut", keywords: ["food", "dessert", "sweet"] },
    { emoji: "🍦", name: "Ice Cream", keywords: ["food", "dessert", "sweet", "cold"] },
    // Animal emojis
    { emoji: "🐶", name: "Dog Face", keywords: ["animal", "pet", "dog"] },
    { emoji: "🐱", name: "Cat Face", keywords: ["animal", "pet", "cat"] },
    { emoji: "🐭", name: "Mouse Face", keywords: ["animal", "mouse", "rodent"] },
    { emoji: "🐰", name: "Rabbit Face", keywords: ["animal", "bunny", "rabbit"] },
    { emoji: "🦊", name: "Fox Face", keywords: ["animal", "fox"] },
    { emoji: "🐻", name: "Bear Face", keywords: ["animal", "bear"] },
    { emoji: "🐼", name: "Panda Face", keywords: ["animal", "panda"] },
    // Object emojis
    { emoji: "💻", name: "Laptop", keywords: ["computer", "technology", "work"] },
    { emoji: "📱", name: "Mobile Phone", keywords: ["phone", "technology", "smartphone"] },
    { emoji: "⌚", name: "Watch", keywords: ["time", "accessory"] },
    { emoji: "📷", name: "Camera", keywords: ["photo", "picture"] },
    { emoji: "🎮", name: "Video Game", keywords: ["game", "play", "controller"] },
    // More categories can be added...
];

// DOM elements
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const errorMessage = document.getElementById('error-message');
const emojiResults = document.getElementById('emoji-results');
const resultsCount = document.getElementById('results-count');
const copyNotification = document.getElementById('copy-notification');
const currentYearEl = document.getElementById('current-year');

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear();

// Event listeners
searchInput.addEventListener('input', handleSearch);
clearBtn.addEventListener('click', clearSearch);

// Initialize the app
function init() {
    // Show all emojis on initial load
    displayEmojis(emojiData);
}

// Handle search functionality
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    // Show/hide clear button based on input content
    clearBtn.style.display = query ? 'block' : 'none';
    
    // Clear error message
    errorMessage.textContent = '';
    
    if (!query) {
        displayEmojis(emojiData);
        return;
    }
    
    // Filter emojis based on search query
    const filteredEmojis = emojiData.filter(emoji => {
        return emoji.name.toLowerCase().includes(query) || 
               emoji.keywords.some(keyword => keyword.includes(query));
    });
    
    // Display results or error message
    if (filteredEmojis.length === 0) {
        errorMessage.textContent = `No emojis found for "${query}". Try a different search term.`;
        emojiResults.innerHTML = '';
        resultsCount.textContent = '';
    } else {
        displayEmojis(filteredEmojis);
    }
}

// Display emojis in the grid
function displayEmojis(emojis) {
    emojiResults.innerHTML = '';
    
    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.innerHTML = `
            <span class="emoji-char">${emoji.emoji}</span>
            <span class="emoji-name">${emoji.name}</span>
        `;
        
        // Add click event to copy emoji
        emojiItem.addEventListener('click', () => {
            copyToClipboard(emoji.emoji);
        });
        
        emojiResults.appendChild(emojiItem);
    });
    
    // Update results count
    updateResultsCount(emojis.length);
}

// Update the results count text
function updateResultsCount(count) {
    if (count === emojiData.length) {
        resultsCount.textContent = `Showing all ${count} emojis`;
    } else {
        resultsCount.textContent = `Found ${count} emoji${count !== 1 ? 's' : ''}`;
    }
}

// Clear the search input
function clearSearch() {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    errorMessage.textContent = '';
    displayEmojis(emojiData);
    searchInput.focus();
}

// Copy emoji to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyNotification();
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyNotification();
        });
}

// Show the copy notification
function showCopyNotification() {
    copyNotification.classList.add('show');
    
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 2000);
}

// Initialize the app
init();