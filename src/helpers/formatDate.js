export default function(date_str, value){
    const d = new Date(date_str);
    const day = d.getDate()
    const month = 1+d.getMonth()
    const sep = typeof(value) === 'object' && Object.prototype.hasOwnProperty.call(value, 'sep') ? value.sep : '.'
    const isTime = typeof(value) === 'object' && Object.prototype.hasOwnProperty.call(value, 'showTime') ? value.showTime : false
    
    let formatted = (day < 10 ? '0'+day : day) +sep+(month < 10 ? '0'+month : month)+sep+d.getFullYear()
    if(isTime){
        const hours = d.getHours()
        const minutes = d.getMinutes()
        formatted += ' '+(hours<10 ? '0'+hours : hours)+':'+(minutes < 10 ? '0'+minutes : minutes)
    }
    return formatted
}