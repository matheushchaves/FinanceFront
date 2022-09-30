import { environment } from 'src/environments/environment';

export class API {
    static readonly BASE_URL_BACKEND = environment.backEndEndPoint;
    static readonly URL_LOGIN_SAML = `${API.BASE_URL_BACKEND}/auth/loginurl`;
  static readonly URL_LOGOUT_SAML = `${API.BASE_URL_BACKEND}/auth/logouturl`;
  static readonly URL_VALID_TOKEN = `${API.BASE_URL_BACKEND}/auth/validate`;
  static readonly LOGIN_BASIC = `${API.BASE_URL_BACKEND}/auth/login`;

}