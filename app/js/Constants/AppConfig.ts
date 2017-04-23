import { API_URL }  from './AppBasePath.js';

export class AppConfig {
	public static get BASE_PATH(): string {
		return API_URL;
	}

	public static get GET_PROJECTS_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'project/list';
	}

	public static get DELETE_PROJECT_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'project';
	}

	public static get POST_PROJECTS_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'project';
	}

	public static get GET_LOGGED_USER_URL(): string {
		return AppConfig.BASE_PATH + 'logged_user';
	}

	public static get GOOGLE_SIGN_IN_URL(): string {
		return AppConfig.BASE_PATH + 'auth/google';
	}

	public static get LOGOUT_URL(): string {
		return AppConfig.BASE_PATH + 'auth/logout';
	}

	public static get CONVERTER_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'converter';
	}

	public static get USER_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'user';
	}

	public static get GET_PROJECT_HISTORY_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'project_history';
	}
}
