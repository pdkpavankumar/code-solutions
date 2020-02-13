function isCryptSolution(crypt, solution) {
	if (crypt.length < 3) return false;
	let s = solution;
	let hash = {};

	//Build hash table as object for quick lookup
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s[i].length; j++) {
			hash[s[i][0]] = s[i][1];
		}
	}

	//Build numbers
	let c = crypt;
	let e = [];
	for (i = 0; i < c.length; i++) {
		let a = [];
		for (j = 0; j < c[i].length; j++) {
			a.push(hash[c[i][j]]);
		}
		a = a.join('');
		e.push(a);
	}
	console.log(e);
	let eq = Number(e[0]) + Number(e[1]) === Number(e[2]);
	let z =
		Number(e[0][0]) !== 0 && Number(e[1][0]) !== 0 && Number(e[2][0]) !== 0;
	let lz = c[0].length < 2;
	console.log(eq, z);
	return lz ? eq : eq && z;
}
