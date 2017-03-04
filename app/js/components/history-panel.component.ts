import {Component, Injectable, trigger, state, transition, style, animate, OnInit, Input} from '@angular/core';
import {FieldChange} from "../model/FieldChange";
import {Observable} from "rxjs";
import {ProjectHistory} from "../model/entity/ProjectHistory";
declare var moment : any;


@Component({
    moduleId: module.id,
    selector: 'history-panel',
    templateUrl: '../../view/history-panel.component.html',
    styleUrls: ['../../styles/history-panel.component.css'],
    animations: [
        trigger('animateOpacity', [
            state('fullOpacity', style({
                'opacity': '1'
            })),
            transition('void => *', [
                style({
                    'opacity': '0.3',
                }),
                animate('500ms 200ms linear')
            ]),
        ])
    ]
})

@Injectable()
export class HistoryPanelComponent implements OnInit
{
    @Input() getChangedValues: (lastLoadedId : string) => Observable<Array<ProjectHistory>>;

    constructor() {}

    ngOnInit(): void {
        this.getChangedValues(this.lastLoadedId).subscribe((history) => {
            this.history = history;
            this.panelHistoryChanges = this.transformHistoryToPanelMessages(history);
            console.log("changedValues: ", history);
        });
    }

    transformHistoryToPanelMessages(historyChanges : Array<ProjectHistory> ): Array<String> {
        const panelHistory = [];
        this.canLoadMore = historyChanges.length === 6;

        if (this.canLoadMore) {
            const lastItem = historyChanges.shift();
            this.lastLoadedId = lastItem ? lastItem.id : this.lastLoadedId;
        }

        historyChanges = historyChanges.sort((historyChangeFst, historyChangeSnd) => {
            return historyChangeSnd.createdAtTimestamp - historyChangeFst.createdAtTimestamp;
        });

        historyChanges.forEach((historyChange) => {
            panelHistory.push({
                when: this.computeWhen(historyChange.createdAtTimestamp),
                who: historyChange.createdBy,
                fieldChangeList: historyChange.fieldChangeList
            });
        });


        return panelHistory;
    }

    computeWhen(createdAtTimestamp : number): string {
        let date = moment(createdAtTimestamp);
        return date.fromNow();
    }

    onScroll(): void {
        if (this.canLoadMore) {
            this.getChangedValues(this.lastLoadedId).subscribe((additionalHistory) => {
                this.history = this.history.concat(additionalHistory);
                this.panelHistoryChanges = this.panelHistoryChanges.concat(this.transformHistoryToPanelMessages(additionalHistory));
                console.log("changedValues: ", additionalHistory);
            });
        }

    }

    history: Array<ProjectHistory>;
    panelHistoryChanges: Array<Object> = [];
    lastLoadedId: string = null;
    canLoadMore: boolean = true;
}
