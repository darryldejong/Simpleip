document.addEventListener('DOMContentLoaded', function() {
    const ipv4Element = document.getElementById('ipv4');
    const ipv6Element = document.getElementById('ipv6');
    const darkModeToggle = document.getElementById('darkModeToggle');

    function fetchIPs() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipv4Element.textContent = data.ip;
            })
            .catch(error => {
                console.error('Error retrieving IPv4:', error);
                ipv4Element.textContent = "Failed to retrieve IPv4";
            });

        fetch('https://api6.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                ipv6Element.textContent = data.ip;
            })
            .catch(error => {
                console.error('Error retrieving IPv6:', error);
                ipv6Element.textContent = "Failed to retrieve IPv6";
            });
    }

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    fetchIPs();
});
