function extract(id) {
    let textElement = document.getElementById(id);
    let text = textElement.textContent;
    let pattern = /\((?<str>[^\(]+)\)/g;
    let allValidMatches = [];
    let validMatch;

    while ((validMatch = pattern.exec(text)) !== null) {
        allValidMatches.push(validMatch.groups.str);
    }

    return allValidMatches.join('; ');
}