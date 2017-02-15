import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ConverterService} from "../services/converter.service";
import {Converter} from "../model/entity/Converter";

@Component({
    selector: 'converter-detail',
    templateUrl: 'app/view/converter-detail.component.html'
})

export class ConverterDetailComponent implements OnInit {
    constructor(
        private converterService: ConverterService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.converterService.getConverter(id)
                .subscribe(converter => this.converter = converter);
        });
    }

    goBack(): void {
        this.router.navigate(['converter-list']);
    }

    edit(): void {
        this.router.navigate(['converter/edit', this.converter.id])
    }

    delete(): void {
        this.converterService
            .deleteConverter(this.converter.id)
            .subscribe(res => {
                console.log(res);
                this.router.navigate(['converter-list']);
            });
    }

    converter: Converter = null;
}
