import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

type GamesPaginationProps = Readonly<{
	count: number;
	page: number;
	pageSize: number;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}>;

const GamesPagination = ({
	count,
	page,
	pageSize,
	onPageChange,
}: GamesPaginationProps) => {
	return (
		<Pagination.Root
			count={count}
			page={page}
			pageSize={pageSize}
			siblingCount={2}
			marginBlock="auto"
			onPageChange={(e) => onPageChange(e.page)}
		>
			<ButtonGroup variant="outline" size="sm">
				<Pagination.PrevTrigger>
					<IconButton>
						<LuChevronLeft />
					</IconButton>
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
					<IconButton>
						<LuChevronRight />
					</IconButton>
				</Pagination.NextTrigger>
			</ButtonGroup>
		</Pagination.Root>
	);
};

export default GamesPagination;
