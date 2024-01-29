const dosenNID = 'DOO3'; // NID dosen yang ingin diupdate
const updateData = {
    Nama: 'Srikandi',
    Gender: 'L',
    Bidang: 'DKV',
    Alamat: 'Depok'
};

fetch (`http://localhost:3000/dosen/${dosenNID}`, { // Update URL endpoint menjadi '/dosen'
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
