const path = require('path');
const Out=(request,response,next)=>{
    const d = new Date();
    if( (d.getDay() == 0 || d.getDay() == 6) && (d.getHours() >17 || d.getHours()<9) ){
        return response.sendFile(path.join(__dirname+'/public/closed.html'));
    }else{next()}
    }
module.exports= Out ;