import { User } from './User';
import { Converter } from './Converter';

export class Project {
	id: string;
	name: string;
	assignee: User;
	approval: User;
	projectKey: String;
	syncVersions: boolean;
	branches: String[] = [];
	converter: Converter;
	git: string;
	resourcePath: string;
}
