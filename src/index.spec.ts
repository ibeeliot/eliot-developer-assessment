import * as request  from 'supertest';
import app from './index';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

interface Assessment {
	id: number,
	is_complete: boolean,
	start_time: string,
	total_time: string | null,
	progress: boolean | null,
	total_correct: number | null,
	build_seed: null,
	version_number: null,
	assessment: number,
	student: number,
	created_at: string,
	updated_at: string,
	created_by: null,
	updated_by: null,
	}


test('/ route returns simple hello', async () => {
	const response = await request(app.callback()).get('/');
	expect(response.status).toBe(200);
	expect(response.text).toBe('Hello World');
})


test('/student/display/:id returns normalized object', async () => {
	const expectedSchema: Assessment = ({
	id: 0,
	is_complete: false,
	start_time: '',
	total_time: '',
	progress: false,
	total_correct: null,
	build_seed: null,
	version_number: null,
	assessment: 0,
	student: 1,
	created_at: '',
	updated_at: '',
	created_by: null,
	updated_by: null,
	})

	const response = await request(app.callback()).get(`/student/display/${1}`);
	expect(response.status).toBe(200);
	expect(response.text).toMatchSnapshot();
	expect(response.text).toMatchSchema(expectedSchema);
})