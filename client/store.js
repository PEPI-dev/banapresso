async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/'); 
        const data = await response.json();
        console.log(data);
        displayData(data)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function displayData(data) {
    const container = document.getElementById('informationContainer');

    
    data.forEach(banapresso => {
        const infoElement = document.createElement('div');
        infoElement.className = 'informationItem';
        infoElement.innerHTML = `<img src="./banapress/${banapresso.name}.jpg" alt="Image"><div><p><b>매장명:</b></p> <p>${banapresso.name}</p><p><b>주소:</b><p> ${banapresso.address}</p></div>`;
        container.appendChild(infoElement);
        if (info.address) {
            getAddress(banapresso.address, banapresso.name, image);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    fetchData();
});

