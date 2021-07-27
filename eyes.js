const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (let element of balls){
    element.style.left = x;
    element.style.top = y;
    element.transform = 'translate(-' + x + ',-' + y + ')';
  }
  // balls[0].style.left = x;
  // balls[0].style.top = y;
  // balls[0].transform = 'translate(-' + x + ',-' + y + ')';
};
