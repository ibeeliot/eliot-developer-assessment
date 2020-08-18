// Routes
import * as koa from 'koa';
import * as Router from 'koa-router';

class StudentController {
    // constructor(){}

    async display(ctx: koa.Context, next: koa.Next) {
        // Work starts here.
        console.log('HEY from student controller');
    }

}
export const studentController = new StudentController();

// TODO - delete
const testController = async(ctx: koa.Context, next: koa.Next) => {
    const testDialogue = await ctx.body;
    console.log('!!! this is context body', testDialogue);
} 

class TestController {
    // constructor(){}
    async display(ctx: koa.Context, next: koa.Next) {
        // Work starts here.
        console.log('HEY from test controller');
    }
}
export const test = new TestController();
//
// Simple routing logic
//
const router = new Router()

// TODO - delete
router.get('/', test.display)

router.get('/student/display/:studentid', studentController.display)

export const StudentRouters = router;
