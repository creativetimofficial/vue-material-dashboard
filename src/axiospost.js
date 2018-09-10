import axios from 'axios'
export default function(urlpart,params) {
 return  axios.post('/v1/api/'+urlpart,params)
  .then(function (response) {
    if(response.data){
       response.data;
    }

  })

}
