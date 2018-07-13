import calendarCursor from './controller/calendarCursor';
export default function(router) {
  return router
    .post('/change_year_cursor', async (req, res) => {
      res.json({});
      return { cursorYear: req.body.year };
    })
    .post('/change_calendar_view', async (req, res) => {
      res.json({});
      return { calendarView: req.body.view };
    })
    .post('/change_cursor', calendarCursor.create)
    .patch('/change_cursor', async () => ({}), calendarCursor.update);
}
