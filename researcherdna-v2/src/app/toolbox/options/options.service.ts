import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../globals/globalVariables';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private http:HttpClient) {}
  apiUrl = apiUrl;

  //UPDATE GUIDELINES SERVICE / API
  updateGuideline(guidelineObject:any):Observable<any>
  {
    return this.http.patch(`${this.apiUrl + "guidelines/" + guidelineObject.id }`, guidelineObject);
  }

  deleteGuideline(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiUrl + "guidelines/" + id }`);
  }

  createGuideline(guidelineObject:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl + "guidelines?projectTypeId=" + guidelineObject.projectTypeId}` , guidelineObject);
  }

  getHtmlDetails(guidelineId:any):Observable<any>
  {
    return this.http.get(`${this.apiUrl + "guidelines/userHtml/details/" + guidelineId}`);
  }

  guidelines(projectTypeId:number): Observable<any>
  {
     return this.http.get(`${this.apiUrl+"guidelines"}?projectTypeId=`+projectTypeId);
  }
  getGuideline(guidelineId:number): Observable<any>
  {
    return this.http.get(`${this.apiUrl+"guidelines/"+ guidelineId}`);
  }

}
