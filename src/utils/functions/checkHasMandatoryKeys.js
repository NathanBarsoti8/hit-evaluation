/**
 * Function that check whether the mandatory keys for a requisition have been sent
 * @param {JSON} objectToCheck JSON to check
 * @param {String[]} mandatoryKeys String array with JSON keys that are mandatory
 * @returns {false | String[]} Returns false Boolean if all mandatory keys have been sent or returns an array of strings with all mandatory keys that have not been sent
 */
function checkIfHasMandatoryKeys(objectToCheck, mandatoryKeys) {
    const objectKeys = Object.keys(objectToCheck)
    const missingKeys = mandatoryKeys.reduce((accumulator, key) => {
        if (!objectKeys.includes(key)) {
            accumulator.push(key)
        }

        return accumulator
    }, [])

    return missingKeys.length > 0 ? missingKeys : false
}

module.exports = {
    checkIfHasMandatoryKeys
}
