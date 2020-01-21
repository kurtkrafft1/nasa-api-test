const generateHtml = (obj) => {
    return `<div class="nasaOne"><h1>${obj.rover.name}</h1><img src=${obj.img_src}><h6>Launch Date: ${obj.rover.launch_date}</h6></div>`
}


const nasaURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=bqvFUoenDGeR9PIKImBvjEJ3G9R1xa2u51SMP0PG";

fetch (nasaURL)
    .then(resp=> resp.json())
    .then(nasaData => {
        console.log(nasaData)
        nasaData.photos.forEach(item => {
            console.log(item)
            let Html = generateHtml(item);
            console.log(Html)
            const nasaPhotos = document.querySelector('#nasaPhotos');
            nasaPhotos.innerHTML += Html;
        })
        
    })
