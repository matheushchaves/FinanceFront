import { environment } from 'src/environments/environment';

export class API {
  static readonly BASE_URL_BACKEND = environment.backEndEndPoint;
  static readonly USUARIO_API = `${API.BASE_URL_BACKEND}/Usuarios`;
  static readonly URL_VALID_TOKEN = `${API.USUARIO_API}/validarToken`;
  static readonly LOGIN_BASIC = `${API.USUARIO_API}/login`;
}
