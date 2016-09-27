import { User } from './User';
import { Converter } from './Converter';

export class Project {
	id: number;
	name: string;
	assignee: User;
	reviewer: User;
	converter: Converter;
	description: string;
	git_url: string;
	stash_id: string;
	format: string;
	path_to_resources: string;
	resource_prefix: string;
}
