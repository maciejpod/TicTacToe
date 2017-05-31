module.exports = function (config)
{
    config.set({
        files: [
            // Add your files here, this is just an example:
            {pattern: 'lib/**/*.js', mutated: true, included: false},
            'tests/**/*.js'
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        htmlReporter: {
            baseDir: 'reports/mutation/html' // this is the default
        },
        reporter: ['clear-text', 'progress','html']
    });
};