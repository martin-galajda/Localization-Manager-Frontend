import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConverterService } from '../services/converter.service';
import { Converter } from '../model/entity/Converter';

@Component({
    selector: 'converter-list',
    templateUrl: 'app/view/converter-list.component.html'
})

export class ConverterListComponent implements OnInit {
    constructor(
        private converterFetcher: ConverterService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.converters = [];
        this.getConverters();
    }

    getConverters(): void {
        this.converterFetcher.getConverters().subscribe(converters => this.converters = converters,
            error => console.log(error)
        );
    }

    goToDetail(converter: Converter): void {
        let link = ['/converter/detail', converter.id];
        this.router.navigate(link);
    }

    goToAddNewConverter(): void {
        let link = ['/converter/add'];
        this.router.navigate(link);
    }

    showSignInModal: boolean;
    converters: Converter[];
    query: string = '';
}
