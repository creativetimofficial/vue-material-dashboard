import axios from 'axios'
export default function(urlpart,defaultresult,params) {
  console.log('/参数/')
 return  axios.get('/v1/api/'+urlpart,{
    params: params
  })
  .then(function (response) {
    if(response.data.Status==200){
      return response.data.Result||defaultresult;

    }else{
      throw new error(response.data.Result)
    }

  })

}
