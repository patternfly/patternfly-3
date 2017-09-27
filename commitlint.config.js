var conventionalCommitTypes = require('conventional-commit-types');

module.exports = {
    "extends" : ['cz'],
    "rules": {
        "type-enum": [
            2,
            "always",
            Object.keys(conventionalCommitTypes.types)
        ],
        "subject-case": [
            0
        ]
    }
}
