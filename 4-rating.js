function drawRating(vote) {
	if (vote >= 0 && vote <= 20) return '★☆☆☆☆'
	if (vote > 20 && vote <= 40) return '★★☆☆☆'
	if (vote > 40 && vote <= 60) return '★★★☆☆'
	if (vote > 60 && vote <= 80) return '★★★★☆'
	if (vote > 80 && vote <= 100) return '★★★★★'
}

/**
 * Как я понимаю, тут можно только убрать else
 * А также сделать if в 1 строку
*/

console.log(drawRating(10))
