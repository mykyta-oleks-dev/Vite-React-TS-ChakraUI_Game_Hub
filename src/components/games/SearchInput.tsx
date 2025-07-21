import useQueryStore from '@/stores/queryStore';
import { IconButton, Input, InputGroup } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function SearchInput() {
	const ref = useRef<HTMLInputElement | null>(null);
	const setSearch = useQueryStore((s) => s.setSearch);
	const navigate = useNavigate();

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
						setSearch('');
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
						setSearch(ref.current?.value ?? '');
						navigate('/');
					}
				}}
				placeholder="Input game name"
			/>
		</InputGroup>
	);
}

export default SearchInput;
