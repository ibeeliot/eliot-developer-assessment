// Feel free to change this data as needed

interface Assessment {
    id: number,
    is_complete: boolean,
    start_time: string,
    total_time: string | null,
    total_correct: number | null,
    build_seed: null,
    version_number: null,
    assessment: number,
    student: number,
    created_at: string,
    updated_at: string,
    created_by: null,
    updated_by: null,
    progress: boolean,
    }

const log1: Assessment[] = [
    {
        id: 7,
        is_complete: true,
        start_time: "2020-07-24T16:36:37.000Z",
        total_time: "183297",
        progress: false,
        total_correct: 5,
        build_seed: null,
        version_number: null,
        assessment: 1,
        student: 1,
        created_at: "2020-07-24T16:36:37.000Z",
        updated_at: "2020-07-24T16:39:41.000Z",
        created_by: null,
        updated_by: null
    },
    {
        id: 8,
        is_complete: true,
        start_time: "2020-07-24T16:49:59.000Z",
        total_time: "267049636",
        total_correct: 2,
        progress: false,
        build_seed: null,
        version_number: null,
        assessment: 2,
        student: 1,
        created_at: "2020-07-24T16:49:59.000Z",
        updated_at: "2020-07-27T19:00:49.000Z",
        created_by: null,
        updated_by: null
    },
    // Example of completed
    {
        id: 12,
        is_complete: true,
        start_time: "2020-07-27T20:41:55.000Z",
        total_time: "6435786",
        progress: false,
        total_correct: 5,
        build_seed: null,
        version_number: null,
        assessment: 4,
        student: 1,
        created_at: "2020-07-27T20:41:55.000Z",
        updated_at: "2020-07-27T22:29:11.000Z",
        created_by: null,
        updated_by: null
    },
    // Example of OPEN
    {
        id: 15,
        is_complete: false,
        start_time: "2020-08-06T15:42:57.000Z", 
        // Mark this with todays data and time for an examle of an open exam
        total_time: null,
        progress: false,
        total_correct: null,
        build_seed: null,
        version_number: null,
        assessment: 3,
        student: 1,
        created_at: "2020-08-06T15:42:57.000Z",
        updated_at: "2020-08-06T15:43:00.000Z",
        created_by: null,
        updated_by: null
    },
    // Example for Upcoming
    {
        id: 17,
        is_complete: false,
        start_time: "2021-10-06T15:42:57.000Z", 
        total_time: null,
        progress: false,
        total_correct: null,
        build_seed: null,
        version_number: null,
        assessment: 3,
        student: 1,
        created_at: "2020-08-06T15:42:57.000Z",
        updated_at: "2020-08-06T15:43:00.000Z",
        created_by: null,
        updated_by: null
    },
    // Example of expired
    {
        id: 19,
        is_complete: false,
        start_time: "2020-06-06T15:42:57.000Z", 
        total_time: '3325',
        progress: false,
        total_correct: 5,
        build_seed: null,
        version_number: null,
        assessment: 7,
        student: 1,
        created_at: "2020-08-06T15:42:57.000Z",
        updated_at: "2020-08-06T15:43:00.000Z",
        created_by: null,
        updated_by: null
    },
      // Example in Progress
      {
        id: 21,
        is_complete: false,
        start_time: "2020-08-08T15:42:57.000Z", 
        total_time: '11193',
        progress: true,
        total_correct: null,
        build_seed: null,
        version_number: null,
        assessment: 7,
        student: 1,
        created_at: "2020-08-06T15:42:57.000Z",
        updated_at: "2020-08-06T15:43:00.000Z",
        created_by: null,
        updated_by: null
    }
]

const log2: Assessment[]  = [
    {
        id: 7,
        is_complete: true,
        start_time: "2020-07-24T16:36:37.000Z",
        total_time: "183297",
        progress: false,
        total_correct: 5,
        build_seed: null,
        version_number: null,
        assessment: 1,
        student: 2,
        created_at: "2020-07-24T16:36:37.000Z",
        updated_at: "2020-07-24T16:39:41.000Z",
        created_by: null,
        updated_by: null
    },
    {
        id: 8,
        is_complete: true,
        start_time: "2020-07-24T16:36:37.000Z",
        total_time: "183297",
        progress: false,
        total_correct: 5,
        build_seed: null,
        version_number: null,
        assessment: 1,
        student: 2,
        created_at: "2020-07-24T16:36:37.000Z",
        updated_at: "2020-07-24T16:39:41.000Z",
        created_by: null,
        updated_by: null
    }
]

//*************************************** */
// Do not change anything between these lines
class LogRepo {

    // Assume this is essentially a call to the database
    getLogsByStudent = async (studentID: number) => {
        if (studentID === 1) {
            return await log1;
        } else if (studentID === 2) {
            return await log2;
        } else {
            return { error: 'No student found' }
        }
    }
}
export const logRepo = new LogRepo();
// Do not change anything between these lines
//*************************************** */