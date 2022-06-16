let iframe = document.querySelector('iframe')
let input = document.querySelector('.link')
let btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    if(input.value!=''){
        var link = input.value
        btn.style.display = 'none'
        download(link) 
    }
})
function download(link){
    iframe.src=`https://loader.to/api/button/?url=${link}&f=360`
}
