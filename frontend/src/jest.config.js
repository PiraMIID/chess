const config = {
    verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
    return {
        verbose: true,
    };
};

const crypto = require('crypto');
const fs = require('fs');

module.exports = {
    extract(code, filePath, defaultExtract) {
        const deps = defaultExtract(code, filePath);
        // Scan the file and add dependencies in `deps` (which is a `Set`)
        return deps;
    },
    getCacheKey() {
        return crypto
            .createHash('md5')
            .update(fs.readFileSync(__filename))
            .digest('hex');
    },
};