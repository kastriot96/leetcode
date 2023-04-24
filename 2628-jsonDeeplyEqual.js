const areDeeplyEqual = (o1, o2) => {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    const entries1 = Object.values(o1);
    const entries2 = Object.values(o2);

    if (o1 === o2) {
        return true;
    }
    if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
        return false;
    }
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }

    if ((keys1.length !== keys2.length) && (entries1.length !== entries2.length)) {
        return false;
    }
    return keys1.every(key => keys2.includes(key) && areDeeplyEqual(o1[key], o2[key]));
};

console.log(areDeeplyEqual({x: 1, y: 2} , {x: 1, y: 2}));