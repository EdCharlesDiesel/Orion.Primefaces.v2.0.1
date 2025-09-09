import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpResponse} from '@angular/common/http';
import {UrlFactoryService} from './url-factory.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AttachmentModel} from "../api/rich-message.model";

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  constructor(
    private http: HttpClient,
    private urlFactory: UrlFactoryService
  ) {}

  uploadFormData(formData: FormData): Observable<HttpEvent<{ [id: string]: string }>> {
    return this.http.post<{ [id: string]: string }>(
      this.urlFactory.getUploadUrl(),
      formData,
      {
        reportProgress: true,
        observe: 'events',
        responseType: 'json'
      }
    );
  }

  // downloadAttachment(attachment: AttachmentModel): Observable<Blob> {
  //   const payload = new HttpParams().set('fileId', attachment.fileId);

  //   return this.http.post(this.urlFactory.getDownloadUrl(), payload, {
  //     observe: 'response',
  //     responseType: 'blob'
  //   }).pipe(
  //     tap(response => this.redirectBlobToBrowser(response, attachment.name, attachment.type))
  //   );
  // }

  private redirectBlobToBrowser(response: HttpResponse<Blob>, fileName: string, fileType: string): void {
    const blob = new Blob([response.body!], { type: fileType });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 100); // Delay revoking to allow download to start
  }
}