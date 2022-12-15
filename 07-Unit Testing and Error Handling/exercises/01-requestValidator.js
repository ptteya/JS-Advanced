function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
        error('Method');
    }

    let pattern = /^[\w.]+$|^\*$/;
    if (!obj.hasOwnProperty('uri') || !pattern.test(obj.uri)) {
        error('URI');
    }

    if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
        error('Version');
    }

    let messagePattern = /^[^<>\\&'"]*$/;
    if (!obj.hasOwnProperty('message') || !messagePattern.test(obj.message)) {
        error('Message');
    }

    function error(header) {
        throw new Error(`Invalid request header: Invalid ${header}`);
    }

    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

// console.log(requestValidator({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// }));