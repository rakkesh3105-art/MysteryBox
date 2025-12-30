document.addEventListener('DOMContentLoaded', function() 
{
    const userName = sessionStorage.getItem('userName');
    if (!userName) 
	{
        window.location.href = 'index.html';
        return;
    }
    const giftBox = document.getElementById('giftBox');
    const overlay = document.getElementById('firecrackerOverlay');
    giftBox.addEventListener('click', function() 
	{
        giftBox.classList.add('opening');
        setTimeout(() => {
            window.location.href = 'welcome.html';
        }, 1200);
    });
});