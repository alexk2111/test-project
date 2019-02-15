import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  url = environment.apiUrl + '/tags';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  deleteTag(id) {
    return this.http.post(this.url + "/destroy/" + id, this.options);
  }

  addTag(newTag, autoParkId) {
    const body = {
      auto_park_id: autoParkId,
      name: newTag
    };
    return this.http.post(this.url + "/add-tag/", body, this.options);
  }
}
