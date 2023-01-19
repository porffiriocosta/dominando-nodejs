import File from "../models/File";

class FilesController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });

    // const name = req.file.name;
    // const path = "0f8fad5b-d9cb-469f-a165-70867728950e";
    // const file = await File.create({ name, path });

    return res.json(file);
  }
}

export default new FilesController();
