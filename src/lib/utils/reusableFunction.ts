const FileObjectToUrl = (value) => {
	let image = value;
	const selectedImageUrl = URL.createObjectURL(image);
	return selectedImageUrl;
};
export default FileObjectToUrl;
