// Routes
import * as koa from 'koa';
import * as Router from 'koa-router';

class StudentController {
    // constructor(){}

    async display(ctx: koa.Context, next: koa.Next) {
        // Work starts here.
        console.log('HEY from student controller')
    }

}
export const studentController = new StudentController();


//
// Simple routing logic
//
const router = new Router()

router.get('/student/display/:studentid', studentController.display)

export const StudentRouters = router;
