var btnSuccess = document.querySelector('.control .success')
var btnWarning = document.querySelector('.control .warning')
var btnError = document.querySelector('.control .error')

btnSuccess.addEventListener('click', function(){
    creaToast('success')
})

btnWarning.addEventListener('click', function(){
    creaToast('warning')
})

btnError.addEventListener('click', function(){
    creaToast('error')
})

function creaToast(status){
    // <div class="toast success">
           
    //         <i class="fa-regular fa-circle-check"></i>
    //         <span>This is a Success massage</span>
    //         <div class="count-down"></div>
    //     </div>

    //     <div class="toast warning">
    //         <i class="fa-solid fa-circle-exclamation"></i>
    //         <span>This is a Success massage</span>
    //         <div class="count-down"></div>
    //     </div>

    //     <div class="toast error">
    //         <i class="fa-solid fa-triangle-exclamation"></i>
    //         <span>This is a Success massage</span>
    //         <div class="count-down"></div>
    //     </div>
   let templateHTML;
   switch (status) {
       case 'success':
           templateHTML = `<i class="fa-regular fa-circle-check"></i>
                         <span>This is a Success massage</span>`
           break;
       case 'warning':
           templateHTML = `<i class="fa-solid fa-circle-exclamation"></i>
                        <span>This is a Warning massage</span>`
           break;
       case 'error':
           templateHTML = `<i class="fa-solid fa-triangle-exclamation"></i>
                         <span>This is a Error massage</span>`
           break;
   
       
   }
   var toast = document.createElement('div')
   toast.classList.add('toast')
   toast.classList.add(status)
   toast.innerHTML = `${templateHTML}
                      <span class="count-down"></span>`

   var toastList = document.getElementById('toasts')
   toastList.appendChild(toast)

   setTimeout(function(){
       toast.style.animation = 'slide_hide 2s ease'
   }, 4000)

   setTimeout(function(){
    toast.remove()
}, 6000)
}

