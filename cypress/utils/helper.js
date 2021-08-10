export const isSuperSet = (setA, setB) => {
    for (let elem of setB) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}

export const intersection = (setA, setB) => {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    let arrayIntersection= [..._intersection];
    return arrayIntersection;
}


export const union = (setA, setB) => {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    let arrayUnion= [..._union];
    return arrayUnion;
}

export const difference = (setA, setB) => {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    let arrayDifference= [..._difference];
    return arrayDifference;
}
