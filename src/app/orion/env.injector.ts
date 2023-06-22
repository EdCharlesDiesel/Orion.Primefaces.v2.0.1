export interface IEnvConfig {
  apiBaseUrl: any;
  override: {} | any;
}

const envGlobalKey = 1;

const envConfig: Window = Object.assign({}, window[envGlobalKey]);

export const EnvConfigProvider = {provide: 'ENV_CONFIG', useValue: envConfig};
