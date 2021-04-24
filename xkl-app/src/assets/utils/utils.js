import qs from 'qs'

class Util{
  constructor(obj) {
      this.that = obj;
  }

  async reqPost(o){

    // let headers = o.header ? {"user_id":o.user_id, "user_token": o.user_token} : {};

    // console.info(headers)

    let res = await this.that.axios({
      method: 'POST',
      url: o.url,
      data: qs.stringify(o.data)
    });

    return res.data
  }

  async reqGet(o){

    let headers = o.header ? {"user-id":o.header.user_id, "user-token": o.header.user_token} : {};

    console.info(o)
    let res = await this.that.axios({
      headers,
      method: 'GET',
      url: o.url,
      params: o.data
    });

    return res.data
  }


}


export default Util;
