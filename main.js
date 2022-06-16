let iframe = document.querySelector('iframe')
let select = document.querySelector('.format')
let input = document.querySelector('.link')
let btn = document.querySelector('.btn')

btn.addEventListener('click',function get(){
    if(input.value!=''){
        var link = input.value
        var as = document.forms[0].ddlViewBy.value;
        var format = select.options[select.selectedIndex].value;
        btn.style.display = 'none'
        download(link, format)
    }
})
function download(link, format){
    iframe.src=`https://loader.to/api/button/?url=${link}&f=${format}`
}
