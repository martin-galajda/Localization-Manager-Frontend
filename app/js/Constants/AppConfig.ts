export class AppConfig {
	public static get BASE_PATH(): string {
		return 'https://glacial-hollows-97055.herokuapp.com/';
	}

	public static get GET_PROJECTS_API_ENDPOINT(): string {
		return AppConfig.BASE_PATH + 'projects';
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
}
