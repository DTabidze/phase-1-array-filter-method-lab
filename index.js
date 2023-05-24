// Code your solution here
function findMatching (drivers,matchName) {
    return drivers.filter(name => name.toLowerCase() === matchName.toLowerCase());
}

function fuzzyMatch (drivers,letters) {
    return drivers.filter(name => name.slice(0,letters.length) === letters);
}

function matchName(drivers,matchName) {
    return drivers.filter(driver => driver.name === matchName);
}