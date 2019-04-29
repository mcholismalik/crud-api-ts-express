import { Request, Response, Router } from "express";
import { ContactController } from "../controllers/crmContoller";

class Routes {
    contactController: ContactController = new ContactController();
    router: Router = Router();

    routes(): Router {
        this.router.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: `Get success !`
            })
        })

        this.router.route('/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact)

        this.router.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)
        
        return this.router;
    }
}

export default Routes;