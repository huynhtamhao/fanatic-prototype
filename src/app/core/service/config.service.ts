import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: any;

  constructor(private http: HttpClient) {}

  public getConfiguration(): any {
    return this.config;
  }

  public getAPIHost(): string {
    return this.config.API_HOST;
  }

  public loadConfig() {
    return lastValueFrom(this.http.get('./assets/config/' + (environment.configFile || 'config.json')))
      .then((config: any) => {
        this.config = config;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
}
