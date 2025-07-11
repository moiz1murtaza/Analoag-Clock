setInterval(() => {

    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hour = now.getHours()
    document.getElementById('Sec').style.transform = `rotate(${sec * 6}deg)`;
    document.getElementById('Min').style.transform = `rotate(${min * 6}deg)`;
    document.getElementById('Hour').style.transform = `rotate(${hour * 30 + min * 0.5}deg)`;

}, 1000);
const Clock = document.getElementById("clock")
const centerX = 100;
const centerY = 100;
const radius = 85;

for (let i = 1; i <= 12; i++) {
    const num = document.createElement('div');
    num.className = 'number';
    num.innerText = i;

    const angle = (i * 30) * (Math.PI / 180);
    const x = centerX + radius * Math.cos(angle - Math.PI / 2);
    const y = centerY + radius * Math.sin(angle - Math.PI / 2);

    num.style.left = x - 10 + 'px';
    num.style.top = y - 10 + 'px';
    clock.appendChild(num);
}
