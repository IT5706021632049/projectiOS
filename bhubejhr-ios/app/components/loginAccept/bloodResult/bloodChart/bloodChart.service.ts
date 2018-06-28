import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { connectionType, getConnectionType } from "connectivity";
import { securityService } from "../../../security/security.service";
import { idp } from "../../../security/model/idp.model"

@Injectable()
export class bloodChartService {

    idp: idp;
    dataUser ;
    token = "a27cf250553d383da99d35260807f4bd2";

    getDataLab (hn): Observable<any> {
        let headers = new Headers({ 
            "Authorization": "Bearer" + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJhdXRoLnVzZXIiLCJ1aWQiOiIyNjc1IiwiZXhwIjoxNTI3ODc0MzI3LCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJkZWxldGUiXX0.FummHEscrVn9YBsKS1Eho0lNiZzOu15CM1Anb_i9mNKc6Gc4cCFnhtafCJuqbuFDCSW6pEPYR9plXkrOq2MfvtFTfaYo36UCTQ1rvdLCg17p8E421ZQY8N80SPZJUB3A3_fWJ9EfZdW7pVgm40DvTRI0XDibmiihGFsKurlowbjh8tGo1L6vsxkaxN9NRwZa6nKL9gRLxeGj8NiymtEEls9odHzr81dKvwHicjxvA4bAjZpiVxaJAz26AHx7x7vMyf5qHR2ODbFb4YDMKX-J23ORsdjY0uoAiU9LPCTP0dyOpTYl4xMHUTaKwkOffGWbP6s_UPv4090qo3l5DBtFPQ",
            "apikey": "df0yViaSjdLqNRhvjBQw2R634w08IzPX" });
        let options = new RequestOptions({ headers: headers });
        let url = "https://apis.cpa.go.th/labs/" + hn ;
        return this.http.get(url, options).map(response => response.json())
        .catch(this.handleErrors) ;
    }

    getDataGender (hn): Observable<any> {
        let headers = new Headers({ 
            "Authorization": "Bearer" + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJhdXRoLnVzZXIiLCJ1aWQiOiIyNjc1IiwiZXhwIjoxNTI3ODc0MzI3LCJzY29wZSI6WyJyZWFkIiwid3JpdGUiLCJkZWxldGUiXX0.FummHEscrVn9YBsKS1Eho0lNiZzOu15CM1Anb_i9mNKc6Gc4cCFnhtafCJuqbuFDCSW6pEPYR9plXkrOq2MfvtFTfaYo36UCTQ1rvdLCg17p8E421ZQY8N80SPZJUB3A3_fWJ9EfZdW7pVgm40DvTRI0XDibmiihGFsKurlowbjh8tGo1L6vsxkaxN9NRwZa6nKL9gRLxeGj8NiymtEEls9odHzr81dKvwHicjxvA4bAjZpiVxaJAz26AHx7x7vMyf5qHR2ODbFb4YDMKX-J23ORsdjY0uoAiU9LPCTP0dyOpTYl4xMHUTaKwkOffGWbP6s_UPv4090qo3l5DBtFPQ",
            "apikey": "df0yViaSjdLqNRhvjBQw2R634w08IzPX" });
        let options = new RequestOptions({ headers: headers });
        let url = "https://apis.cpa.go.th/patient/" + hn ;
        return this.http.get(url, options).map(response => response.json())
        .catch(this.handleErrors) ;
    }
  
    constructor(
        private router: Router,
        private http: Http
    ) { }
handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
}
}