function isNotValidKey(obj) {
	for (const key of Object.keys(obj)) {
    	if ((obj[key] === null || obj[key] === '')) {
            return true;
        } else if (typeof key === Number && obj[key] > 100) {
            return true;
        }
    }
	return false;
} 