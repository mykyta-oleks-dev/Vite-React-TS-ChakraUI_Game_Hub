import usePlatforms from '@/hooks/v2/usePlatforms';
import type { Platform } from '@/services/http/PlatformsService';
import {
	Box,
	createListCollection,
	Portal,
	Select,
	Spinner,
	Text,
	type SelectValueChangeDetails,
} from '@chakra-ui/react';

type PlatformSelectProps = Readonly<{
	selectedPlatforms: Platform[];
	onPlatformSelect: (platforms: Platform[]) => void;
}>;

function PlatformSelect({
	selectedPlatforms,
	onPlatformSelect,
}: PlatformSelectProps) {
	const { data, error, isPending: loading } = usePlatforms();
	const platforms = createListCollection({
		items:
			data?.results.map((platform) => ({
				label: platform.name,
				value: platform.slug,
			})) ?? [],
	});

	const handlePlatformChange = (details: SelectValueChangeDetails) => {
		const selected = details.value.map((value) =>
			platforms.items.find((platform) => platform.value === value)
		);
		onPlatformSelect(
			data?.results.filter((platform) =>
				selected.some((s) => s?.value === platform.slug)
			) ?? []
		);
	};

	return (
		<Box flexGrow={2}>
			{error && <Text color="red.500">{error.message}</Text>}
			{loading ? (
				<Spinner size="md" color="primary" />
			) : (
				<Select.Root
					multiple
					collection={platforms}
					value={selectedPlatforms.map((p) => p.slug)}
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
								{platforms.items.map((item) => (
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
