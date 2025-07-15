const getCroppedImageUrl = (url: string, width = 600, height = 400) => {
	if (!url) return '';
	return url.match(/media\//)
		? url.replace('/media/', `/media/crop/${width}/${height}/`)
		: url;
};

export default getCroppedImageUrl;
