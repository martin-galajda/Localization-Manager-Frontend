import { User } from './User';
import { Converter } from './Converter';

export class Project {
	id: string;
	name: string;
	assignee: User;
	reviewer: User;
	converter: Converter;
	description: string;
	gitUrl: string;
	stashId: string;
	format: string;
	pathToResources: string;
	resourcePrefix: string;
}
