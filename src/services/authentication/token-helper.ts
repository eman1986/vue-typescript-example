export class TokenHelper {
    public static getBearerToken() {
        let token = localStorage.getItem('UserToken');

        return {
            Authorization: token ? `Bearer ${localStorage.getItem('UserToken')}` : null
        };
    }
}