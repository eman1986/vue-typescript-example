export class AppConfig {
    static readonly BaseUrl = 'http://192.168.1.6/api';

    static readonly LoginUrl = `${AppConfig.BaseUrl}/login`;

    static readonly PingUrl = `${AppConfig.BaseUrl}/ping`;
}