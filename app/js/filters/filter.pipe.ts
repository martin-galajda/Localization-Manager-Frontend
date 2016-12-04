import { Pipe, PipeTransform  } from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
	transform(items, query: string) {
		return items.filter(item => {
			for (let key in item) {
				if ((typeof item[key] === 'string' || item[key] instanceof String) &&
					(item[key].indexOf(query) !== -1)) {
						return true;
				}
			}
		});
	}
}
