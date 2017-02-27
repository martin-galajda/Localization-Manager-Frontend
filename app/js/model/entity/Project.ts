import { User } from './User';
import { Converter } from './Converter';
import { FieldChange } from "../FieldChange";

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
	hashMapIdentifier: string;
	status: string;
	wordCount: number;
}
