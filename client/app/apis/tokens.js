/**
 * Created by lichb on 2017/2/9.
 */
import Util from '../libs/util'
import qs from 'qs'
export default {
  getTokens(name, password){
    
    Util.ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return Util.ajax.post('/api/user/verify', qs.stringify({
      name,
      password
    }))
  },
  checkTokens(){
    return Util.ajax.get('/api/user/checkuser')
  },
  logout() {
    return Util.ajax.get('/api/user/logout')
  }
}
