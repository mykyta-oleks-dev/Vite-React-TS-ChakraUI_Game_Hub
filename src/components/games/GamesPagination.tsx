import useQueryStore from '@/stores/queryStore';
import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useShallow } from 'zustand/react/shallow';

type GamesPaginationProps = Readonly<{
	count: number;
}>;

const GamesPagination = ({ count }: GamesPaginationProps) => {
	const { page, pageSize, setPage } = useQueryStore(
		useShallow((s) => ({
			page: s.page,
			pageSize: s.page_size,
			setPage: s.setPage,
		}))
	);

	return (
		<Pagination.Root
			count={count}
			page={page}
			pageSize={pageSize}
			siblingCount={2}
			marginBlock="auto"
			onPageChange={(e) => setPage(e.page)}
		>
			<ButtonGroup variant="outline" size="sm">
				<Pagination.PrevTrigger>
					<LuChevronLeft />
				</Pagination.PrevTrigger>
				<Pagination.Items
					render={(p) => (
						<IconButton
							variant={{ base: 'surface', _selected: 'solid' }}
						>
							{p.value}
						</IconButton>
					)}
				/>
				<Pagination.NextTrigger>
					<LuChevronRight />
				</Pagination.NextTrigger>
			</ButtonGroup>
		</Pagination.Root>
	);
};

export default GamesPagination;
