import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConverterService } from '../services/converter.service';
import { Converter } from "../model/entity/Converter";


@Component({
    moduleId: __filename,
    selector: 'converter-edit',
    templateUrl: '../../view/converter-edit.component.html',
    styleUrls: ['../../styles/form.component.css']
})
export class ConverterEditComponent
{
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private converterService: ConverterService)
    {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.id = id;
            this.converterService.getConverter(id)
                .subscribe(converter => this.model = converter);
        });
    }

    goBack(): void {
        this.router.navigate(['converter-list']);
    }

    updateConverter(): void {
        this.converterService
            .updateConverter(this.model)
            .subscribe(() => {
                this.router.navigate(['converter/detail', this.id])
            },
            error => console.log(error)
        );
    }

    addConvertToXliff(): void {
        this.model.convertToXliff.push(this.convertToXliffInput);
        this.convertToXliffInput = "";
    }

    removeConvertToXliff(i : number): void {
        this.model.convertToXliff.splice(i, 1);
    }

    addConvertFromXliff(): void {
        this.model.convertFromXliff.push(this.convertFromXliffInput);
        this.convertFromXliffInput = "";
    }

    removeConvertFromXliff(i : number): void {
        this.model.convertFromXliff.splice(i, 1);
    }

    model: Converter;
    convertToXliffInput: string;
    convertFromXliffInput: string;
    id: string;
}
