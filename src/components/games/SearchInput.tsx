import { IconButton, Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

function SearchInput({
	onSearchChange,
}: Readonly<{
	onSearchChange: (search: string) => void;
}>) {
	const ref = useRef<HTMLInputElement | null>(null);
	return (
		<InputGroup
			startElement={<FaSearch />}
			endElement={
				<IconButton
					type="button"
					rounded="full"
					size="sm"
					onClick={() => {
						if (ref.current) {
							ref.current.value = '';
						}
						onSearchChange('');
					}}
				>
					<FaTimes />
				</IconButton>
			}
			endElementProps={{
				padding: 0,
			}}
		>
			<Input
				ref={ref}
				// variant="subtle"
				bg="emphasis"
				borderRadius={30}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onSearchChange(ref.current?.value ?? '');
					}
				}}
				placeholder="Input game name"
			/>
		</InputGroup>
	);
}

export default SearchInput;
