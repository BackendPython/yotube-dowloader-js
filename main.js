let iframe = document.querySelector('iframe')
let select = document.querySelector('.format')
let input = document.querySelector('.link')
let btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    if(input.value!=''){
        var link = input.value
        var format = select.children('option:selected').value
        btn.style.display = 'none'
        download(link, format) 
    }
})
function download(link, format){
    iframe.src=`https://loader.to/api/button/?url=${link}&f=${format}`
}
