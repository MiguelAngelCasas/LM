function searchCars() {
    const resultsDiv = document.getElementById('results');
    const model = document.getElementById('model').value;
    fetch(`https://api.api-ninjas.com/v1/cars?model=${model}`, {
      method: 'GET',
      headers: { 'X-Api-Key': '7z8iKLi7oiX2HGxOUclhgg==NgF4xYbImFZcblQs' },
      contentType: 'application/json'
    })
    .then(response => response.json())
    .then(data => {
      const firstCar = data[0];
      console.log(data[0]);
  
      // Crear elementos HTML y agregar las características del primer objeto
      const ul = document.createElement('ul');
      const marcaLi = document.createElement('li');
      const modeloLi = document.createElement('li');
      const anioLi = document.createElement('li');
      const cilindrosLi = document.createElement('li');
      marcaLi.textContent = `Marca: ${firstCar.make}`;
      modeloLi.textContent = `Modelo: ${firstCar.model}`;
      anioLi.textContent = `Año: ${firstCar.year}`;
      cilindrosLi.textContent = `Cilindros: ${firstCar.cylinders}`;
      ul.appendChild(marcaLi);
      ul.appendChild(modeloLi);
      ul.appendChild(anioLi);
      ul.appendChild(cilindrosLi);
  
      // Borrar contenido anterior y agregar la lista al elemento resultsDiv
      resultsDiv.innerHTML = '';
      resultsDiv.appendChild(ul);
    })
    .catch(error => console.error('Error:', error));
  }
  