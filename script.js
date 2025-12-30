document.addEventListener('DOMContentLoaded', function() 
{
    const form = document.getElementById('loginForm');
    const userNameInput = document.getElementById('userName');
    const santaTransition = document.getElementById('santaTransition');
    const santaCrackles = document.getElementById('santaCrackles');
    createConfetti();
    form.addEventListener('submit', function(e) 
	{
        e.preventDefault();
        const userName = userNameInput.value.trim();
        if (userName) 
		{
            sessionStorage.setItem('userName', userName);
            startSantaRide(() => 
			{
                window.location.href = 'gift.html';
            });
        }
    });
    function createConfetti() 
	{
        const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d96ff', '#c44569', '#ff9ff3'];
        const confettiContainer = document.querySelector('.confetti-container');
        setInterval(() => 
		{
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);
            setTimeout(() => 
			{
                confetti.remove();
            }, 4000);
        }, 200);
    }
    function startSantaRide(onFinish) 
	{
        if (!santaTransition || !santaCrackles) 
		{
            onFinish();
            return;
        }
        santaTransition.classList.add('active');
        const duration = 2200;
        const interval = 70;
        const total = Math.floor(duration / interval);
        let i = 0;
        const rideInterval = setInterval(() => 
		{
            const crackle = document.createElement('div');
            crackle.className = 'crackle';
            const y = 65 + Math.random() * 15;
            const x = 10 + (i / total) * 80 + (Math.random() * 6 - 3);
            crackle.style.top = y + '%';
            crackle.style.left = x + '%';
            santaCrackles.appendChild(crackle);
            setTimeout(() => crackle.remove(), 700);
            i++;
            if (i > total) 
			{
                clearInterval(rideInterval);
            }
        }, interval);
        setTimeout(() => 
		{
            onFinish();
        }, duration + 300);
    }
});