document.addEventListener('DOMContentLoaded', function() 
{
    const userName = sessionStorage.getItem('userName');
    if (!userName) 
	{
        window.location.href = 'index.html';
        return;
    }
    const welcomeTitle = document.getElementById('welcomeTitle');
    const funnyGreetings = [
        `🎊 ${userName}.. Time To Tease You !! 😂`
    ];
    const randomGreeting = funnyGreetings[Math.floor(Math.random() * funnyGreetings.length)];
    welcomeTitle.textContent = randomGreeting;
    const teasingContent = [
        {
            title: "Mini Version 😆",
            text: "Remember This? I Bet You Do! 😉",
            type: "image",
            media: "images/memory.jpg"
        },
        {
            title: "Your Food Obsession 🍕",
            text: "Food > Everything Else. We All Know It! 🍔",
            type: "image",
            media: "images/food.jpg"
        },
        {
            title: "Your Go-To Pose 📸",
            text: "Every. Single. Moment. Same Pose! ✨",
            type: "image",
            media: "images/pose.jpg"
        },
        {
            title: "That Laugh Though 😂",
            text: "Warning: Teeth On Display 😁",
            type: "image",
            media: "images/laugh.jpg"
        },
		{
            title: "When You Think You're Sneaky 🕵️",
            text: "You Thought I Wouldn't Notice? 😎",
            type: "image",
            media: "images/sneaky.jpg"
        },
        {
            title: "That Santa's Little Helper Vibe 😅",
            text: "Pretending To Help.. Actually Just Chilling 😜",
            type: "image",
            media: "images/santa.jpg"
        },
        {
            title: "When The Expression Speaks 😄",
            text: "No Words — Just Laughter 😂",
            type: "image",
            media: "images/expression.jpg"
        },
        {
            title: "When Sleep Takes Full Control 😴",
            text: "Acting Like Listening — But Actually Dreaming 💤",
            type: "image",
            media: "images/sleep.jpg"
        }
    ];
    const grid = document.getElementById('teasingGrid');
    teasingContent.forEach((item, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'teasing-item';
        gridItem.textContent = item.title;
        gridItem.addEventListener('click', () => openModal(item));
        grid.appendChild(gridItem);
    });
    const modal = document.getElementById('imageModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalText = document.getElementById('modalText');
    function openModal(item) 
	{
        modalTitle.textContent = item.title;
        modalText.textContent = item.text;
        if (item.type === 'image') 
		{
            modalImage.src = item.media;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        } 
		else 
		{
            modalVideo.src = item.media;
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
        }
        modal.style.display = 'block';
        createModalConfetti();
    }
    closeModal.addEventListener('click', () => 
	{
        modal.style.display = 'none';
        modalImage.src = '';
        modalVideo.src = '';
    });
    window.addEventListener('click', (e) => 
	{
        if (e.target === modal) 
		{
            modal.style.display = 'none';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });
    function createModalConfetti() 
	{
        const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d96ff', '#c44569', '#ff9ff3'];
        const confettiContainer = document.querySelector('.confetti-container');
        for (let i = 0; i < 30; i++) 
		{
            setTimeout(() => 
			{
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
                confetti.style.width = (Math.random() * 15 + 10) + 'px';
                confetti.style.height = (Math.random() * 15 + 10) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confettiContainer.appendChild(confetti);
                setTimeout(() => 
				{
                    confetti.remove();
                }, 2000);
            }, i * 30);
        }
    }

});
