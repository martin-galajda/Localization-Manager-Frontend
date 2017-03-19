import { Project } from '../model/entity/Project';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConverterService } from '../services/converter.service';
import { Converter } from "../model/entity/Converter";
@Component({
    moduleId: __filename,
    selector: 'converter-add',
    templateUrl: '../../view/converter-add.component.html',
    styleUrls: ['../../styles/form.component.css']
})

export class ConverterAddComponent
{
    constructor(
        private router: Router,
        private converterService: ConverterService)
    {
        this.model = new Converter();
        this.options = [];
        for (let i = 0; i < 100; ++i) {
            this.options.push({
                value: i.toString(),
                label: i.toString(),
            });
        }
    }

    goBack(): void {
        this.router.navigate(['converter-list']);
    }

    addConverter(): void {
        this.converterService.addConverter(this.model).subscribe(converter => this.model = converter,
            error => console.log(error));
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

    onSingleSelected(option: any): void {
        console.log(option);
    }

    onSingleDeselected(option: any): void {
        console.log(option);
    }

    model: Converter;
    disabled: boolean = false;
    convertToXliffInput: string;
    convertFromXliffInput: string;
    options: any[];
}
