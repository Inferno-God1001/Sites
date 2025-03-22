document.getElementById('show-ip-button').addEventListener('click', function() {
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => {
                    const ip = data.ip;
                    const city = data.city;
                    const region = data.region;
                    const bairro = data.postal;

                    const resultDiv = document.getElementById('result');
                    resultDiv.innerHTML = `
                        <p class="info"><strong>IP:</strong> ${ip}</p>
                        <p class="info"><strong>City:</strong> ${city}</p>
                        <p class="info"><strong>State:</strong> ${region}</p>
                        <p class="info"><strong>Neighborhood:</strong> ${bairro}</p>
                    `;
                })
                .catch(error => {
                    console.error('Erro ao obter dados de localização:', error);
                    document.getElementById('result').innerText = '404:Error retrieving your IP location information. Please try again later :(';
                });
        });