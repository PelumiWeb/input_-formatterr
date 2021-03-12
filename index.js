module.exports = () => {
    const input = document.querySelectorAll('.input')
    const array = Array.from(input)
    array.map(input => 
        ( input.addEventListener('keyup', function(evt){
        var n = parseInt(this.value.replace(/\D/g,''),10);
        input.value = n.toLocaleString();
        }, false)))
}

