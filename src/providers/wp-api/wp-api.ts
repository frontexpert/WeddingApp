import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider {

  host: string = 'https://weddingstas.com.au';

  constructor(public http: HttpClient, private storage: Storage) {
  }

  private getHeaders() {
    return this.storage.get('appToken').then((token) => {
      let headers: HttpHeaders = new HttpHeaders();
      return headers.append('Authorization', 'Bearer ' + token);
    });
  }

  authUser(login: string, pass: string) {
    return this.http.post(this.host + '/wp-json/jwt-auth/v1/token', {
      username: login,
      password: pass
    }).toPromise().then((data: any) => {
      if (data && data.hasOwnProperty('token')) {
        return this.storage.set('appToken', data.token);
      }
      else {
        throw new Error('unexpected_state');
      }
    }).then(() => {
      return this.updateUser();
    });
  }

  validateUser() {
    return this.getHeaders().then((headers) => {
      return this.http.post(this.host + '/wp-json/jwt-auth/v1/token/validate', {}, {
        headers: headers
      }).toPromise();
    }).then((data: any) => {
      if (data.code === 'jwt_auth_valid_token') {
        return this.updateUser();
      }
      else {
        throw data;
      }
    });
  }

  createUser(login: string, pass: string, email: string) {
    return this.http.post(this.host + '/wp-json/app/v1/create_user', {
      login: login,
      pass: pass,
      email: email
    }).toPromise().then((data) => {
      if (data === null) {
        return;
      }
      else {
        throw new Error('unexpected_state');
      }
    });
  }

  updateUser() {
    return this.getHeaders().then((headers) => {
      return this.http.get(this.host + '/wp-json/app/v1/access_user', {
        headers: headers
      }).toPromise().then((remoteUser: any) => {
        if (remoteUser && remoteUser.hasOwnProperty('timestamp')) {
          return this.storage.keys().then((keys) => {
            if (keys.indexOf('appUser') >= 0) {
              return this.storage.get('appUser').then((localUser) => {
                if (localUser && localUser.hasOwnProperty('timestamp')) {
                  let localTime = JSON.parse(localUser['timestamp']),
                    remoteTime = JSON.parse(remoteUser['timestamp']);
                  let localImageTime = JSON.parse(localUser['image-timestamp']),
                    remoteImageTime = JSON.parse(remoteUser['image-timestamp']);

                  return new Promise((resolve) => resolve()).then(() => {
                    if (localTime > remoteTime) {
                      return this.http.post(this.host + '/wp-json/app/v1/access_user', localUser, {
                        headers: headers
                      }).toPromise();
                    }
                    else if (localTime < remoteTime) {
                      return this.storage.set('appUser', remoteUser);
                    }
                  }).then(() => {
                    if (localImageTime > remoteImageTime) {
                      return this.storage.get('appImage').then((data) => {
                        return this.http.post(this.host + '/wp-json/app/v1/access_image', {
                          data: data
                        }, {
                          headers: headers
                        }).toPromise();
                      });
                    }
                    else if (localImageTime < remoteImageTime || keys.indexOf('appImage') < 0) {
                      return this.http.get(this.host + '/wp-json/app/v1/access_image', {
                        headers: headers
                      }).toPromise().then((res: any) => {
                        return this.storage.set('appImage', res.data);
                      })
                    }
                  });
                }
                else {
                  throw new Error('localuser_no_timestamp');
                }
              });
            }
            else {
              return this.storage.set('appUser', remoteUser);
            }
          });
        }
        else {
          throw new Error('remoteuser_no_timestamp');
        }
      });
    });
  }

  getData(key: string) {
    return this.storage.get('appUser').then((user) => {
      return user[key] === undefined ? null : JSON.parse(user[key]);
    });
  }

  setData(key: string, val: any) {
    return this.storage.get('appUser').then((user) => {
      user[key] = JSON.stringify(val === undefined ? null : val);
      user['timestamp'] = JSON.stringify(Date.now());

      return this.storage.set('appUser', user);
    });
  }

  getImage() {
    return this.storage.get('appImage').then((data) => {
      return data === null ? '' : data;
    });
  }

  setImage(data: string) {
    return this.storage.set('appImage', data).then(() => {
      return this.setData('image-timestamp', Date.now());
    });
  }
}
