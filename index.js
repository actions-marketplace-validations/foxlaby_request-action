const core = require("@actions/core");
const axios = require('axios');

(async () => {

    const _method = core.getInput('method');
    const _url = core.getInput('url');

    if (_method == 'POST') {
        await axios.post(_url)
            .catch(function (error) {
                core.error(error);
            });
    }

    if (_method == 'GET') {
        await axios.get(_url)
            .catch(function (error) {
                core.error(error);
            });
    }

})();