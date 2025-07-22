import usePlatforms from '@/hooks/v2/usePlatforms';
import useQueryStore from '@/stores/queryStore';
import {
	Box,
	createListCollection,
	Portal,
	Select,
	Spinner,
	Text,
	type SelectValueChangeDetails,
} from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';

function PlatformSelect() {
	const { data, error, isPending: loading } = usePlatforms();
	const platformsOptions = createListCollection({
		items:
			data?.results.map((platform) => ({
				label: platform.name,
				value: platform.slug,
			})) ?? [],
	});

	const { platforms, setPlatforms } = useQueryStore(
		useShallow((s) => ({
			platforms: s.platforms,
			setPlatforms: s.setPlatforms,
		}))
	);

	const handlePlatformChange = (details: SelectValueChangeDetails) => {
		const selected = details.value.map((value) =>
			platformsOptions.items.find((platform) => platform.value === value)
		);
		setPlatforms(
			data?.results.filter((platform) =>
				selected.some((s) => s?.value === platform.slug)
			) ?? []
		);
	};

	return (
		<Box flexGrow={2} display="flex">
			{error && <Text color="red.500">{error.message}</Text>}
			{loading ? (
				<Spinner size="md" color="primary" mx="auto" my="auto" />
			) : (
				<Select.Root
					multiple
					collection={platformsOptions}
					value={platforms.map((p) => p.slug)}
					onValueChange={handlePlatformChange}
				>
					<Select.HiddenSelect />
					<Select.Label>Choose platforms:</Select.Label>
					<Select.Control bg="emphasis">
						<Select.Trigger>
							<Select.ValueText placeholder="Select Platforms" />
						</Select.Trigger>
						<Select.IndicatorGroup>
							<Select.ClearTrigger />
							<Select.Indicator />
						</Select.IndicatorGroup>
					</Select.Control>
					<Portal>
						<Select.Positioner>
							<Select.Content>
								{platformsOptions.items.map((item) => (
									<Select.Item key={item.value} item={item}>
										{item.label}
									</Select.Item>
								))}
							</Select.Content>
						</Select.Positioner>
					</Portal>
				</Select.Root>
			)}
		</Box>
	);
}

export default PlatformSelect;
