import { fetchBuildTools } from '../src/js/utils';

test('fetchBuildTools should return a list of tools', async () => {
    const tools = await fetchBuildTools();
    expect(tools.length).toBeGreaterThan(0);
});