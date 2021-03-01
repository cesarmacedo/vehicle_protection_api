import { Router } from 'express';
import { saveCustomer, getCustomer, updateCustomer, getCustomers }
    from './controller/CustomerController';
import { saveEvent, getEvents }
    from './controller/EventController';
import { getThirdParties }
    from './controller/ThirdController';

const routes = Router();

routes.post('/api/v1/customer', saveCustomer);
routes.get('/api/v1/customer', getCustomers);
routes.get('/api/v1/customer/:id', getCustomer);
routes.put('/api/v1/customer/:id', updateCustomer);
routes.post('/api/v1/event/', saveEvent);
routes.get('/api/v1/event/', getEvents);
routes.get('/api/v1/third/', getThirdParties);

export default routes
