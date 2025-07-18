import useQueryStore from '@/stores/queryStore';
import { Box, createListCollection, Portal, Select } from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';

function SortSelect() {
	const collection = createListCollection({
		items: [
			{ label: 'Relevancy', value: '' },
			{ label: 'Name', value: '-name' },
			{ label: 'Name Asc.', value: 'name' },
			{ label: 'Release date', value: '-released' },
			{ label: 'Release date Asc.', value: 'released' },
			{ label: 'Users ratings', value: '-rating' },
			{ label: 'Users ratings Asc.', value: 'rating' },
			{ label: 'Metacritic', value: '-metacritic' },
			{ label: 'Metacritic Asc.', value: 'metacritic' },
		],
	});
	const { sort, setSort } = useQueryStore(
		useShallow((s) => ({
			sort: s.sort,
			setSort: s.setSort,
		}))
	);

	return (
		<Box flexGrow={1}>
			<Select.Root
				collection={collection}
				value={[sort]}
				onValueChange={(e) => setSort(e.value[0])}
			>
				<Select.HiddenSelect />
				<Select.Label>Sort by:</Select.Label>
				<Select.Control bg="emphasis">
					<Select.Trigger>
						<Select.ValueText placeholder="Sort by" />
					</Select.Trigger>
					<Select.IndicatorGroup>
						<Select.Indicator />
					</Select.IndicatorGroup>
				</Select.Control>
				<Portal>
					<Select.Positioner>
						<Select.Content>
							{collection.items.map((item) => (
								<Select.Item key={item.value} item={item}>
									{item.label}
								</Select.Item>
							))}
						</Select.Content>
					</Select.Positioner>
				</Portal>
			</Select.Root>
		</Box>
	);
}

export default SortSelect;
