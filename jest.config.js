module.exports = {
    testPathIgnorePatterns: [
        "/node_modules/", "/.next/"
    ],
    setupFilesAfterEnd: [
        "<rootDir>/src/tests/setupTests.js"
    ],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx)$":"<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$":"identity-obj-proxy"
    }
};