import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

type ExpandableTextProps = Readonly<{
	children: string;
	maxChars?: number;
}>;

function ExpandableText({ children, maxChars = 300 }: ExpandableTextProps) {
	const [expanded, setExpanded] = useState(false);
	const isBigger = children.length > maxChars;
	const viewedText = expanded
		? children
		: children.slice(0, maxChars) + '...';
	return (
		<Text>
			{isBigger ? viewedText : children}
			{isBigger && (
				<Button
					size="xs"
					ms={2}
					p={0}
					px={1}
					onClick={() => setExpanded(!expanded)}
					colorPalette="yellow"
				>
					{expanded ? 'Less' : 'More'}
				</Button>
			)}
		</Text>
	);
}

export default ExpandableText;
