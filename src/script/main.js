const btn = document.getElementById('search-it'),
    inputVal = document.getElementById('search');

const sendData =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 10000);
    });
};  
btn.addEventListener('click', (e) => {
    e.preventDefault();

    sendData()
        .then(arr => {
            console.log('i m here');
            const div = document.createElement('div');
            div.style.cssText = `background-color: #ff4; 
                                    width: 500px;
                                    height: 500px`;

            document.body.append(div);
            div.textContent = inputVal.value;
        })
        .catch(err => console.err(err));
});

inputVal.addEventListener('input', e => {
    let target = e.target;

    target.value = target.value.replace(/[^\D]/g, '');
});