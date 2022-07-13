var upload = document.querySelector('#myPicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')
upload.addEventListener('change', function(e){
   
    var file = upload.files[0]
    
    if (!file) {
        return
    }
    console.log(file.name)
    if(!file.name.endsWith('.jpg') && !file.name.endsWith('.JPG')){
        error.innerHTML = `Ảnh phải là .jpg`
        return
    } else{
        error.innerHTML =``
    }

    
    if(file.size / (1024*1024) >5 ){

        error.innerHTML = `Ảnh phải bé hơn 5MB`
        return
    } else{
        error.innerHTML =``
    }
    var img = document.createElement('img')
    img.src = URL.createObjectURL(file);
    preview.appendChild(img)
})