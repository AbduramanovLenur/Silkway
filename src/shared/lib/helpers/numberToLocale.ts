export const numberToLocale = (value: number | undefined | null) => {
	if (!value) return 0;
	
	return value.toLocaleString('ru').replace(',', '.');
};