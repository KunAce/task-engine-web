import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GroupChatService {
  constructor(private http: HttpClient) { }
}
