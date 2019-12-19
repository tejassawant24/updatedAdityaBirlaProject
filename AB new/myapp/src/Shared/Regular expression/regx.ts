export class Regx{ 
    static Name(control){
        let regx= /^[a-zA-Z]+((['. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        let valid = regx.test(control.value);

        return valid ?null: {name:true}
}
    static kids(control){
        let regx = /^[0-9]/;
        let valid = regx.test(control.value)
        return valid ?null : {kids:true}
    }

}
   
