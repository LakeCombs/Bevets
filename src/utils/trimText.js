export const TrimTextWithEllipse = (text, length) => {
	const inputString = text;
	const maxLength = length;

	const modifiedString = inputString.replace("'", "").substring(0, maxLength);

	const outputString =
		modifiedString.length < inputString.length
			? modifiedString + "..."
			: modifiedString;

	console.log(outputString);

	return outputString;
};
