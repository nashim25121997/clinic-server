export const crudHandlers = (Model, populate = []) => ({
  list: async (req, res) => {
    try {
      const items = await Model.find().populate(populate);
      res.json(items);
    } catch (e) { res.status(500).json({ error: e.message }); }
  },
  get: async (req, res) => {
    try {
      const item = await Model.findById(req.params.id).populate(populate);
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    } catch (e) { res.status(500).json({ error: e.message }); }
  },
  create: async (req, res) => {
    try {
      const created = await Model.create(req.body);
      res.status(201).json(created);
    } catch (e) { res.status(400).json({ error: e.message }); }
  },
  update: async (req, res) => {
    try {
      const updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: "Not found" });
      res.json(updated);
    } catch (e) { res.status(400).json({ error: e.message }); }
  },
  remove: async (req, res) => {
    try {
      const deleted = await Model.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Not found" });
      res.json({ success: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
  }
});
