const newDosenData = {
    NID: 'DOO8', // Ganti dengan NID yang sesuai
    Nama: 'Siti',
    Gender: 'P',
    Bidang: 'Mesin',
    Alamat: 'Jl.Raya Babakan'
};

fetch('http://localhost:3000/dosen', { // Update URL endpoint menjadi '/dosen'
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newDosenData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
