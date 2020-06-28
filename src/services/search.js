export default function search(objectsToSearch, stringToFind) {
    if (stringToFind !== "") {
       
        var objectFiltered = objectsToSearch.filter(c => {
            for (const key of Object.keys(c)) {
                if (String(c[key]).toLowerCase().indexOf(stringToFind.toLowerCase()) >= 0) { return true; }
                continue;
            }
            return false;
        });
    }
    return objectFiltered;
}