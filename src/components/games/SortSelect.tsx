import { Box, createListCollection, Portal, Select } from '@chakra-ui/react';

type PlatformSelectProps = Readonly<{
	sort: string;
	onSortSelect: (type: string) => void;
}>;

function SortSelect({ sort, onSortSelect: setSort }: PlatformSelectProps) {
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

	return (
		<Box flexGrow={1}>
			<Select.Root
				collection={collection}
				value={[sort]}
				onValueChange={(e) => setSort(e.value[0])}
				variant="subtle"
			>
				<Select.HiddenSelect />
				<Select.Label>Sort by:</Select.Label>
				<Select.Control>
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
