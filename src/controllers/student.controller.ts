// Routes
import * as koa from 'koa';
import * as Router from 'koa-router';

import {assessmentController} from './assessment.controller';

class StudentController {

    async display(ctx: koa.Context) {
        // // Work starts here.
        // ctx.body = `Student 1 has these assessment: 
        // ${JSON.stringify(ctx.state)}
        // `;
        ctx.body=ctx.state;
    }
}

export const studentController = new StudentController();

const router = new Router()

class TestController {

    async display(ctx: koa.Context) {
        // // Work starts here.
        // ctx.body = `Student 1 has these assessment: 
        // ${JSON.stringify(ctx.state)}
        // `;
        ctx.body='Hello World';
    }
}

export const testController = new TestController;

router.get('/', testController.display);

router.get('/student/display/:studentid', assessmentController.normalizeData, studentController.display)

export const StudentRouters = router;
