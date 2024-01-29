const dosenNID = 'DOO5'; // Ganti dengan NID dosen yang ingin dihapus

fetch(`http://localhost:3000/dosen/${dosenNID}`, { // Update URL endpoint menjadi '/dosen'
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
