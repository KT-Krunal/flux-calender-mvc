
var SlotController = require('./controllers/slot');
var slotController = new SlotController();

module.exports = function(app, express) {
  
  var apiRouter = express.Router();
  
  apiRouter.get('/slots/', slotController.getSlots);
  
  apiRouter.post('/slots/:starttime', slotController.updateSlot);

  return apiRouter;
}