import { Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchInput({
	onSearchChange,
}: Readonly<{
	onSearchChange: (search: string) => void;
}>) {
	const ref = useRef<HTMLInputElement | null>(null);
	return (
		<InputGroup startElement={<FaSearch />}>
			<Input
				ref={ref}
				variant="subtle"
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
