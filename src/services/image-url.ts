const getCroppedImageUrl = (url: string, width = 600, height = 400) => {
	if (!url) return '';
	return RegExp(/media\//).exec(url)
		? url.replace('/media/', `/media/crop/${width}/${height}/`)
		: url;
};

export default getCroppedImageUrl;
