import * as koa from 'koa';
import {logRepo} from '../repos/assessmentLog.repo';

import * as moment from 'moment'

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

class AssessmentController {
    
    async normalizeData(ctx: koa.Context, next: koa.Next ) {
        // Work starts here.
    const endPoint: number = parseInt(ctx.request.url.slice(-1)); 

    const replyFromDB = await logRepo.getLogsByStudent(endPoint);

    // check for error from our "database"
    if('error' in replyFromDB) {
        ctx.throw(400, replyFromDB.error)
    }

    interface Normalized {
        upcoming: Assessment[],
        open: Assessment[],
        expired: Assessment[],
        inProgress: Assessment[],
        completed: Assessment[],
    }

        const normalizedData: Normalized = {
        upcoming: [],
        open: [],
        expired: [],
        inProgress: [],
        completed: [],
    }

    replyFromDB.forEach(( assessment: Assessment ) => {

        const totalTime: string | null = assessment.total_time;
        const isComplete: string | boolean = assessment.is_complete;
        const inProgress: boolean | null = assessment.progress;
        const hasTotalCorrect: number | null = assessment.total_correct;

        const isUpComing: boolean = moment(assessment.start_time).isAfter(moment(), 'y');

        if( isUpComing && !isComplete && !totalTime && !inProgress ){
        normalizedData.upcoming.push(assessment)
        }
        else if ( !isUpComing && isComplete && totalTime && !inProgress ) {
        normalizedData.completed.push(assessment)
        }
        else if ( inProgress ) {
        normalizedData.inProgress.push(assessment)
        }
        else if( !isUpComing && totalTime && !isComplete && !inProgress && hasTotalCorrect ) {
        normalizedData.expired.push(assessment)
        }
        else if ( !isUpComing && !totalTime && !isComplete && !inProgress  ) {
        normalizedData.open.push(assessment)
        }
        })

    ctx.state = normalizedData;
    if(next !== null){
        return next();
    }
    }
}

export const assessmentController = new AssessmentController();