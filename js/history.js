document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('historyList');

    // Replace this URL with your API endpoint
    const apiEndpoint = 'https://api.example.com/appointment_history';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            data.forEach(history => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <h3>${history.title}</h3>
                    <p>Date: ${history.date}</p>
                    <p>Time: ${history.time}</p>
                    <p>Doctor: ${history.doctor}</p>
                    <p>Status: ${history.status}</p>
                `;
                historyList.appendChild(historyItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});