module.exports = {
    async rewrite() {
        return [
            { source: '/', destination: '/index.html' },
        ];
    },
};