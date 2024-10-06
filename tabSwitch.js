const livebtn = document.getElementById('livebtn');
const postFlightbtn = document.getElementById('post-flightbtn');

function tabShow(tabId, buttonId) {
    document.querySelectorAll('div[class="plotting"]').forEach(tab => {
        tab.style.display = 'none';
      });
    document.getElementById(tabId).style.display = 'flex';
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = 'rgb(29, 5, 125)';
        button.style.color = 'white';
    }); 
    document.getElementById(buttonId).style.backgroundColor = 'white';
    document.getElementById(buttonId).style.color = 'black';
}

livebtn.addEventListener('click', () => tabShow('live', 'livebtn'));
postFlightbtn.addEventListener('click', () => tabShow('post-flight', 'post-flightbtn'));