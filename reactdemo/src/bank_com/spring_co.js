import axios from "axios";
var url='http://13.60.210.172:8080/api';

function Bankpost(bankdata){
    return axios.post(url+"/post",bankdata)
}
export {Bankpost}//13.60.210.172