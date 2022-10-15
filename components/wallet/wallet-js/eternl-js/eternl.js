
class EternlWalletApi {
    constructor(serilizationLib, ccvault, apiKey) {
        this.apiKey = apiKey
        this.Etern = ccvault
        this.S = serilizationLib
    }
    async isInstalled() {
        if (this.Etern) return true
        else return false
    }
    async isEnabled() {
        return await this.Etern.isEnabled()
    }
    async enable() {
        if (!await this.isEnabled()) {
            try {
                return await this.Etern.enable()
            } catch (error) {
                throw error
            }
        }
    }
}

export default EternlWalletApi;
